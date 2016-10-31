jQuery(document).ready(function($) {

	$('.js-menu-sections').responsiveTabs({
		// all options: https://github.com/jellekralt/Responsive-Tabs
	    startCollapsed: 'accordion',
	    scrollToAccordion: false,
	    scrollToAccordionOnLoad: false,
	    setHash: true,
	    // animation: 'slide',
	    // animationQueue: 'accordion',
	    load: activateSlicks(),
	    activate: function(event, tab){
	    	// $(window).trigger('resize');
	    	$('.js-menu-paging').slick('reinit');
	    	$('.js-menu-pages').slick('reinit');
	    	// console.log('reinitialize');
	    }
	});
	
	
	function activateSlicks() {
		var $slickPaginations = $( '.js-menu-paging' );

		$slickPaginations.each( function( index, element ) {

			var $paginationSlider = $(element);
			var target = $paginationSlider.data('for-slider');
			var $targetSlider = $('#slider-' + target);

			// console.log( $targetSlider );

			$targetSlider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
				arrows: false,
				dots: false,
				adaptiveHeight: true,
				asNavFor: '#pagination-' + target
			});

			$paginationSlider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				asNavFor: '#slider-' + target,
				dots: false,
				arrows: true,
				centerMode: true,
				infinite: false,
				focusOnSelect: true,
				// initialSlide: 1,
				variableWidth: true,
				mobileFirst : true,
				responsive : [
					{
						breakpoint : 480,
						settings : {
							slidesToShow: 3,
							centerMode: false,
						}
					},
					{
						breakpoint : 640, //medium breakpoint
						settings : {
							slidesToShow: 6,
							centerMode: false,
						}
					},
					{
						breakpoint : 840,
						settings : {
							slidesToShow: 14,
							centerMode: false,
						}
					}
				]
			});

		});
		

		// $('.js-menu-pages').slick({
		// 	slidesToShow: 1,
		// 	slidesToScroll: 1,
		// 	arrows: false,
		// 	dots: false,
		// 	adaptiveHeight: true,
		// 	asNavFor: '.js-menu-paging'
		// });

		// $('.js-menu-paging').slick({
		// 	slidesToShow: 3,
		// 	slidesToScroll: 1,
		// 	asNavFor: '.js-menu-pages',
		// 	dots: false,
		// 	arrows: true,
		// 	centerMode: true,
		// 	focusOnSelect: true,
		// 	mobileFirst : true,
		// 	responsive : [
		// 		{
		// 			breakpoint : 840,
		// 			settings : {
		// 				slidesToShow: 15,
		// 				centerMode: false,
		// 			}
		// 		}
		// 	]
		// });
	}
});