var position = { lat: -6.829323 , lng: 39.251322}	

// Map style


// Set google map options
var options = {
	center: position,
	zoom: 18,
	mapTypeControl: true,
	streetViewControl: true,
	scrollwheel: true,
	
}

// Init Map
var map = new google.maps.Map( document.getElementById('contact-map') , options);

// Set map marker
var marker = new google.maps.Marker({
    position: position,
    map: map,
});
