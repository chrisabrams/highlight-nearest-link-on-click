/**
 * Update list count of clicks/misses
 * @param type {String} The type (true || false)
 */
App.prototype.updateInfo = function(prox) {
	var self = this;

	//User clicked on anchor
	if(prox) {
		self.clicks++;
		self.el.clicks.text(self.clicks); //Update click count
	}

	//User missed
	else {
		self.misses++;
		self.el.misses.text(self.misses); //Update miss count
	}
};
