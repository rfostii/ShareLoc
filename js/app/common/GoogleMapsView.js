define([
    'jquery',
    'backbone'
], function($, Backbone) {

    var GoogleMapsView = Backbone.View.extend({
        _map: null,
        el: document.getElementById("main"),

        initialize: function(){
            this._showMap();
            this._attachEvent();
            return this;
        },

        _showMap: function(params){
            var mapOptions = params || {
                zoom: 4,
                center: new google.maps.LatLng(-33, 151),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this._map = new google.maps.Map(this.el, mapOptions);
        },

        _attachEvent: function() {
            google.maps.event.addListener(this._map, 'click', function(event) {
                var marker = new google.maps.Marker({position: event.latLng, map: this._map});
            });
        },

        _onError: function (error) {
            alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
        },

        _showPosition: function (position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            alert(lat + '   ' + lng);
            //var marker = new google.maps.Marker({position: new google.maps.LatLng(lat, lng), map: map});
        },

        showLocation: function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(_showPosition, onError);
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        },

        addMarkerToMap: function(lat, lng){
            var mapBounds = new google.maps.LatLngBounds();
            //to example '-33.890542','151.274856'
            var latitudeAndLongitudeOne = new google.maps.LatLng(lat, lng);
            var markerOne = new google.maps.Marker({
                position: latitudeAndLongitudeOne,
                map: this._map
            });
            mapBounds.extend(latitudeAndLongitudeOne);
            this._map.fitBounds(mapBounds);
        }

    });

    return GoogleMapsView;

});