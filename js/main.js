require.config({
    paths: {
        text: 'frameworks/require-text',
        async: 'frameworks/requirejs-async',
        jquery: 'frameworks/jquery',
        jquerymobile: 'frameworks/jquery.mobile.min',
        underscore: 'frameworks/underscore',
        backbone: 'frameworks/backbone',
        jsrender: 'frameworks/jsrender',
        fastclick: 'frameworks/fastclick',
        less: 'frameworks/less',
        ratchet: 'frameworks/ratchet-2.0.2/dist/js/ratchet',
        cordova: 'frameworks/cordova',
        bootstrap: 'frameworks/bootstrap/js/bootstrap',
        reactjs: 'frameworks/react-0.10.0/build/react',
        templates: 'templates'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        bootstrap: {
            deps: ["jquery"],
            exports: "bootstrap"
        },
        jqueryJson: {
            deps: ["jquery"]
        }
    }
});

require([
    'cordova',
    'jquery',
    'jquerymobile',
    'bootstrap',
    'jsrender',
    'app/app'
], function(){

});