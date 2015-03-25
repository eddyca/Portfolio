(function () {

  $('#container').isotope({
    itemSelector: '.portfolio',
    masonry: {
      resizable: false,
      isFitWidth: true,
      gutter: 20,
      columnWidth: $('#container').find('.portfolio')[0]
    }
  });
  $('#filters').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $('#container').isotope({ filter: filterValue });
});

}());
