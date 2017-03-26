jQuery(function($) {

  // equal heights function
  $.fn.equalHeights = function() {
    var maxHeight = 0,
    $this = $(this);
    $this.each( function() {
      var height = $(this).innerHeight();
      if ( height > maxHeight ) { maxHeight = height; }
    });
    return $this.css('height', maxHeight);
  };

  // web font loader
  WebFontConfig = {
    custom: {
      families: ['museo_sans300', 'museo_sans500', 'museo_sans500italic', 'museo_sans700', 'museo_sans900', 'museo_sans900italic'],
      urls: ['../style.css']
    }
  };

  var query = Modernizr.mq('(min-width: 768px)');
  console.log('flex');
   if (query) {

     $('.flexslider').flexslider({
       slideshow: true,
       selector: ".slides > article",
       controlNav: false
     });

     $('.article-tiles article').matchHeight();
   }

});

