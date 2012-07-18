/**
 * Apply actions that should happen to the anchor(s)
 * @param anchor {Object} The anchor to apply the action to
 */
App.prototype.anchorActions = function(anchor) {
	var self = this;

	//Is it an array of anchors?
	if(anchor instanceof Array) {
		var anchorLength = anchor.length;

		//Loop through anchor tags and apply style
		$(anchor).each(function(index, el) {
			self.anchorCount(el);
			self.highlight(el);
		});
	}

	//Just a single anchor
	else {
		self.anchorCount(anchor);
		self.highlight(anchor);
	}
};
