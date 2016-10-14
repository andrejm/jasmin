jQuery(document).ready(function($) {

	var $body = $('body'),
		$navigation = $( '.js-main-menu' ),
		topbarHeight = 80;

	$('.js-section').each(function eachElement() {
		// cache the jQuery object
		var $this = $(this);

		var position = $this.position();

		var $currentMenuItem = '';

		window.console.log(position);
		window.console.log('min: ' + position.top + ' / max: ' + window.parseInt(position.top + $this.height(), 10));

		$this.scrollspy({
			min: position.top - topbarHeight,
			max: position.top + $this.height() - 1 - topbarHeight,
			onEnter: function onEnter(element/*, position*/) {
				$currentMenuItem = $navigation.find('[data-section="' + element.id + '"]');


				// console.log('[data-section="' + element.id + '"]');
				console.log('Entering ' + element.id);
				console.log($currentMenuItem);

				$currentMenuItem.addClass('main-menu__item--active');

			},
			onLeave: function onLeave(element/*, position*/) {
				window.console.log('Leaving ' + element.id);
				$currentMenuItem = $navigation.find('[data-section="' + element.id + '"]');
				$currentMenuItem.removeClass('main-menu__item--active');
			}
		});
	});


	$menuTrigger = $('.js-section-trigger-menu');
	console.log(' offsest ' + $menuTrigger.offset().top);
	$menuTrigger.scrollspy({
		// min: $menuTrigger.offset().top,
		min: $navigation.height(),
		max: $(document).height(),
		onEnter: function(element, position) {
			console.log('Scrollspy: Entering the menu trigger section');
			$body.addClass('page-scrolled');
		},
		onLeave: function(element, position) {
			console.log('Scrollspy: Leaving the menu trigger section');
			$body.removeClass('page-scrolled');
		}
	});

});