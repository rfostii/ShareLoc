define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {

    var BaseView = Backbone.View.extend({
        el: $('#main'),
        _html: '',

        //=========================public methods===================

        getHtml: function() {
            return this._html;
        },

        setHtml: function(html) {
            this._html = html;
        },

        //=========================private methods===================

        _preRender: function() {
            //should be implemented in child classes
        },

        _postRender: function() {
            //should be implemented in child classes
        },

        render: function () {
            $(document).ready($.proxy(function() {
                this._preRender();
                el.html(this._html);
                this._postRender();
            }, this));
        }
    });

    return BaseView;

});

