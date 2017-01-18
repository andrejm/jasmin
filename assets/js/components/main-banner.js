jQuery(document).ready(function($) {
	console.log('main banner out of if');
	if( $('.js-main-banner').length ) {
		console.log('main banner');
		$('.js-main-banner').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true
		});
	}
});