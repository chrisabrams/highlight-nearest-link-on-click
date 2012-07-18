/**
 * Highlight the element passed to this method
 * @param anchor {Object} The element to highlight
 */
App.prototype.highlight = function(anchor) {
	
	var self = this;

	if(self.anchorList[anchor.id].count > 2) {
		anchor.style.background = 'red';
	} else if(self.anchorList[anchor.id].count > 1) {
		anchor.style.background = 'orange';
	} else if(self.anchorList[anchor.id].count > 0) {
		anchor.style.background = 'yellow';
		anchor.style.color      = 'black';
	}
	
};
