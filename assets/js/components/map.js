// jQuery(document).ready(function($) {
	var map;
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 48.1426607, lng: 17.103889},
			zoom: 17,
			scrollwheel: false,
			draggable: !("ontouchend" in document)
		});

		var marker = new google.maps.Marker({
			position: {lat: 48.1426607, lng: 17.103889},
			map: map,
			title: 'Jasmin restaurant'
		});
	}
// });
