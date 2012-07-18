/**
 * Show # of times anchor was selected
 * @param anchor {Object} The anchor to apply the action to
 */
App.prototype.anchorCount = function(anchor) {
	var self = this;

	//If anchor isn't in list
	if(!self.anchorList.hasOwnProperty(anchor.id)) {
		self.anchorList[anchor.id] = {}; //Add anchor to list
		self.anchorList[anchor.id].count = 1; //Start the count at 1

		self.el.countContainer.append('<li id="count_'+anchor.id+'"><span class="count">1</span><span class="country">'+anchor.innerText+'</span></li>');
	}

	//Update count
	else {
		self.anchorList[anchor.id].count++;
		$('#count_' + anchor.id).find('.count').text(self.anchorList[anchor.id].count);
	}

};
