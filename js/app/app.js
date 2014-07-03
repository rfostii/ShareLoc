define([
    'jquery',
    'underscore',
    'backbone',
    'app/Router',
    'fastclick',
    'reactjs'
], function($, _, Backbone, Router, FastClick, React) {
    $(document).ready(function() {
        React.initializeTouchEvents(true);
        FastClick.attach(document.body);
        new Router();
        Backbone.history.start();
    });
});
