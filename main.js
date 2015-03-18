(function($){

  var $doc = $(document),
    $win = $(window);

  $doc.on('ready', function(){
        // document is ready
        
        $('#container').isotope();
  });

})(jQuery);
