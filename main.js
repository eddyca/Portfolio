
// Simplified this a bit by just wrapping everything in a self-invoking anonymous function (so that your js won't conflict with any libraries)
(function () {

	$('#container').isotope({
		itemSelector: '.portfolio',
		masonry: {
			// Added comma after '.portfolio'
		  itemSelector: '.portfolio',
      layoutMode: 'fitRows',
		  gutter: 20
		  // Removed extra parenthesis and semicolon after }
		} 
	});

}());
