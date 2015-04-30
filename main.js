var myMap = myMap || {};

myMap.initialize = function() {

  var mapStyles = [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}]

    var mapOptions = {
        center: { lat:  25.2048, lng: 55.2708},     
        zoom: 14,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        styles: mapStyles,
        scrollwheel: false
    };


    var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

    var markerOptions = {
            
            position: new google.maps.LatLng(25.2048, 55.2708),
            icon: "marker-48.png"

        }

    var marker = new google.maps.Marker(markerOptions);

    marker.setMap(map);

    var infoWindowOptions = {
            content: 'Blackstone Real Estate',
            position: new google.maps.LatLng(25.2048, 55.2708) // random position, somewhere close to our marker's position
        };

    var popup = new google.maps.InfoWindow(infoWindowOptions);

    // setTimeout(function(){
    //         popup.open(map);
    //     }, 1000);
}

google.maps.event.addDomListener(window, 'load', myMap.initialize);