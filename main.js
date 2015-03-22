
(function () {

  $('#container').isotope({
    itemSelector: '.portfolio',
    masonry: {
      itemSelector: '.portfolio',
      resizable: false,
      gutter: 20,
      columnWidth: $('container').find('.portfolio')[0]
    }
  });

}());
