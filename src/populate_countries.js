/**
 * Populate countries to user
 */
App.prototype.populateCountries = function() {
	var self = this;

	//Loop through country list and create links
	var countryLength = self.countries.length,
		ul            = document.createElement('ul');
		ul.id         = 'country-list';

	for(var i = 0; i < countryLength; i++) {
		var li = document.createElement('li'); //Create new list element
		var a  = document.createElement('a'); //Create new link
		a.id = 'c_' + i; //Assign unique ID to anchor tag
		a.href = '#'; //Assign path to nothing
		a.innerText = self.countries[i]; //Set anchor's text to respective country
		li.appendChild(a); //Put anchor in list element
		ul.appendChild(li); //Put list element in list
	}

	//Append countries list to country container
	self.el.countries.container.append(ul);

	//Capturing the click event
	self.el.countries.container.on('click', function(e) {
		e.preventDefault(); //Don't allow the anchor tags to do anything

		var anchor,
			nodeType = e.target.nodeName,
			prox //Did the user click the anchor or not?

		//User clicked on anchor tag
		if(nodeType == 'A') {
			anchor = e.target;
			prox = true;
		}

		//User clicked somewhere, find closest anchor tag
		else {
			anchor = self.nearest('a', e.pageX, e.pageY);
			prox = false;
		}

		//Apply any actions needed for anchors
		self.anchorActions(anchor);
		self.updateInfo(prox); //Update list
	});
};
