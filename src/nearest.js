/**
 * Get the nearest anchor tag if one was not clicked directly
 * @param sel {String} The closest selector to gran
 * @param x   {Number} The X coordinate to check for nearest selector
 * @param y   {Number} The Y coordinate to check for the nearest selector
 *
 * @return    {Array}  This is the selector(s) that were nearest the click's X/Y and matching selector option
 */
App.prototype.nearest = function(sel, x, y) {
	var cache = [], //List of possible elements
		compDist = Infinity,
		point1x = parseFloat(x) || 0,
		point1y = parseFloat(y) || 0,
		tolerance = 1; //Number of pixels to tolerate - for rounding

	//Loop through all matching selectors
	$(sel).each(function(index, elem) {
		var self = $(this),
			off = self.offset(),
			x = off.left,
			y = off.top,
			w = self.outerWidth(),
			h = self.outerHeight(),
			x2 = x + w,
			y2 = y + h,
			maxX1 = Math.max(x, point1x),
			minX2 = Math.min(x2, point1x),
			maxY1 = Math.max(y, point1y),
			minY2 = Math.min(y2, point1y),
			intersectX = (minX2 >= maxX1),
			intersectY = (minY2 >= maxY1),
			distX,
			distY,
			distT;

		distX = intersectX ? 0 : maxX1 - minX2;
		distY = intersectY ? 0 : maxY1 - minY2;
		distT = (intersectX || intersectY) ? Math.max(distX, distY) : Math.sqrt(distX * distX + distY * distY);

		if(distT <= compDist + tolerance) {
			compDist = Math.min(compDist, distT);
			cache.push({
				node: this,
				dist: distT
			});
		}
	});

	var len = cache.length,
		filtered = [],
		compMin,
		compMax,
		i,
		item;

	//Were there any elements that were cached to be checked?
	if(len) {

		//Loop through cached items
		for(i = 0; i < len; i++) {
			item = cache[i];
			
			//Can the item be tolerated?
			if(item.dist >= compDist && item.dist <= (compDist + tolerance)) {
				filtered.push(item.node);
			}
		}
	}

	return filtered;
};
