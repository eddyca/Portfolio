(function () {

  $('#container').isotope({
    itemSelector: '.portfolio',
    masonry: {
      itemSelector: '.portfolio',
      resizable: false,
      isFitWidth: true,
      gutter: 20,
      columnWidth: $('container').find('.portfolio')[0]
    }
  });

}());
