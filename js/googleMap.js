var googleMap = {
    init: function () {

        $.getJSON("json/googleMaps.json").done(function(data) {
                console.log("success")
            var Places = data.Places;

            var mapOptions = {
                zoom: 4,
                scrollwheel: false,
                panControl:false,
                mapTypeControl: false,
                zoomControl: false,
                scaleControl: false,
                streetViewControl: false,
                center: new google.maps.LatLng(40.0000, -98.0000),
                mapTypeId: google.maps.MapTypeId.TERRAIN
            };

            var map = new google.maps.Map(document.getElementById('map'), mapOptions);

            var markers = [];

            var infoWindow = new google.maps.InfoWindow();

            var createMarker = function (info) {

                var marker = new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(info.latitude, info.longitude),
                    title: info.state
                });
                marker.content = '<div class="infoWindowContent">' + info.state + '</div>';

                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                    infoWindow.open(map, marker);
                });

                markers.push(marker);

            };

            for (var i = 0; i < Places.length; i++) {
                createMarker(Places[i]);
            }

            openInfoWindow = function (e, selectedMarker) {
                e.preventDefault();
                google.maps.event.trigger(selectedMarker, 'click');
            };

            })
            .fail(function() {
                console.log("error")
            });


    }
};

$(document).ready(function() {
    googleMap.init();
});