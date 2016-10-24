jQuery(document).ready(function($) {

	$('.js-menu-sections').responsiveTabs({
		// all options: https://github.com/jellekralt/Responsive-Tabs
	    startCollapsed: false,
	    scrollToAccordion: false,
	    scrollToAccordionOnLoad: false,
	    setHash: true,
	    load: activateSlicks(),
	    activate: function(event, tab){
	    	$('.js-menu-paging').slick('reinit');
	    	$('.js-menu-pages').slick('reinit');
	    	console.log('reinitialize');
	    }
	});
	
	
	function activateSlicks() {
		var $slickPaginations = $( '.js-menu-paging' );

		$slickPaginations.each( function( index, element ) {

			var $paginationSlider = $(element);
			var target = $paginationSlider.data('for-slider');
			var $targetSlider = $('#slider-' + target);

			console.log( $targetSlider );

			$targetSlider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
				adaptiveHeight: true,
				asNavFor: '#pagination-' + target
			});

			$paginationSlider.slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				asNavFor: '#slider-' + target,
				dots: false,
				arrows: true,
				centerMode: true,
				focusOnSelect: true,
				mobileFirst : true,
				responsive : [
					{
						breakpoint : 840,
						settings : {
							slidesToShow: 15,
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