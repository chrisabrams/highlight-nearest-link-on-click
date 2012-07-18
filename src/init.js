/**
 * Initialize the app
 */
App.prototype.init = function() {

	var self = this;

	//Setup event for user clicking get started
	self.el.getStarted.click(function() {
		self.gettingStarted();
	});
};
