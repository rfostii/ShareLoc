define([
    'jquery',
    'underscore',
    'backbone',
    'app/common/GoogleMapsView',
    'app/common/Camera'
], function($, _, Backbone, GoogleMapsView, Camera) {

    var Router = Backbone.Router.extend({
        routes: {
            "/": "home",
            "": "home",
            "showMap": "showMap",
            "getPhoto": "getPhoto"
        },

        initialize: function() {

        },

        home: function() {
            $("#main").hide();
            var el = document.getElementById("photo");
            try {
                new Camera(el).capturePhoto();
            } catch (e) {
                alert(e.message)
            }
        },

        getPhoto: function() {
            $("#main").hide();
            var el = document.getElementById("photo");
            try {
                new Camera(el).getPhoto();
            } catch (e) {
                alert(e.message)
            }
        },

        showMap: function() {
            $("#main").show();
            try {
                new GoogleMapsView();
            } catch (e) {
                alert(e.message)
            }
        },

        _changeRoute: function() {

        }
    });
    return Router;
});