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

	    	// console.log($(tab.selector));
	    	var sliderOnTab = tab.selector.substr(1);

	    	// console.log(sliderOnTab);

	    	$('#slider-' + sliderOnTab).slick('getSlick').resize();
	    	$('#pagination-' + sliderOnTab).slick('getSlick').resize();


	    	//$('#slider-vinny-listok').slick('getSlick').reinit()
	    }
	});

	function activateSlicks() {
		var $slickPaginations = $( '.js-menu-paging' );

		$slickPaginations.each( function( index, element ) {
			activateSlick(element);
		});
	}

	function activateSlick(element) {
		var $paginationSlider = $(element);
		var target = $paginationSlider.data('for-slider');
		var $targetSlider = $('#slider-' + target);

		var targetSliderOptions = {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			asNavFor: '#pagination-' + target,
			adaptiveHeight: true
		};

		var paginationSliderOptions = {
			asNavFor: '#slider-' + target,
			slidesToShow: 7,
			slidesToScroll: 1,
			dots: false,
			centerMode: true,
			focusOnSelect: true,
			arrows: true
		};


		$targetSlider.slick( targetSliderOptions );

		// $paginationSlider.slick({
		// 	slidesToShow: 1,
		// 	slidesToScroll: 1,
		// 	asNavFor: '#slider-' + target,
		// 	dots: false,
		// 	arrows: true,
		// 	centerMode: true,
		// 	infinite: false,
		// 	focusOnSelect: true,
		// 	// initialSlide: 1,
		// 	variableWidth: true,
		// 	mobileFirst : true,
		// 	responsive : [
		// 		{
		// 			breakpoint : 480,
		// 			settings : {
		// 				slidesToShow: 3,
		// 				centerMode: false,
		// 			}
		// 		},
		// 		{
		// 			breakpoint : 640, //medium breakpoint
		// 			settings : {
		// 				slidesToShow: 4,
		// 				centerMode: false,
		// 			}
		// 		},
		// 		{
		// 			breakpoint : 840,
		// 			settings : {
		// 				//bad, but working version: centermode false, slidesToShow 9, arrows false
		// 				//when arrows true, there are two arrows (button elements) generated in slick track and they are considered slides and they desynchronize synced sliders
		// 				centerMode: false,
		// 				slidesToShow: 9,
		// 				arrows: false,
		// 			}
		// 		}
		// 	]
		// });
		$paginationSlider.slick( paginationSliderOptions );
	}
});