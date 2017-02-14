jQuery(document).ready(function($) {
	$('#fullpage').fullpage({
		anchors: ['', 'section-about', 'section-menu', 'section-contact', 'section-bonapetit'],
		menu: '.js-main-menu',
		sectionSelector: '.js-section',
		scrollBar: true,
		paddingTop: '60px',
		bigSectionsDestination: 'top',
		fitToSection: false
	});
});