$( document ).ready(function() {
    console.log( "ready!" );

    $("a.nav-link").click(function() {
       $(".navbar-toggler").attr("aria-expanded", "false");
       $(".navbar-toggler").addClass("collapsed");
       $('.navbar-collapse').removeClass('show');

    });

    var scroll = $(document).scrollTop();
        var headerHeight = $('.page-header').outerHeight();

        $(window).scroll(function() {
          var scrolled = $(document).scrollTop();
          if (scrolled > headerHeight){
            $('.page-header').addClass('off-canvas');
          } else {
            $('.page-header').removeClass('off-canvas');
          }

            if (scrolled > scroll){
             $('.page-header').removeClass('fixed');
            } else {
            $('.page-header').addClass('fixed');
            }
          scroll = $(document).scrollTop();
         });

    

    $('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
});
