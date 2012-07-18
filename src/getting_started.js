/**
 * Get started in selecting the cities
 */
App.prototype.gettingStarted = function() {
	var self = this;

	//Remove the Getting Started hero when the user clicks (don't want to intefere with other anchor tags)
	self.el.hero.remove();

	//Show countries to user
	self.el.content.show();
	self.populateCountries();
};
