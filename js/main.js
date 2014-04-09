(function() {
    //Main.js which is data-main for require

    'use strict'

    requirejs.config({

        paths: {

            jquery: '../common/jquery-1.11.0',
            Underscore: '../common/underscore-min',
            backbone: '../common/backbone-min',
            handlebars: '../common/handlebars'
        },
        shim: {
            Underscore: {
                exports: '_'
            },
            backbone: {
                deps: ["Underscore", "jquery", "handlebars"],
                exports: "backbone"
            },
            waitSeconds: 15
        }

    });


    //define dependencies and view to load the page

    define(['jquery', 'view'], function($, View) {

        $('document').ready(function() {

            //canvas circle
            var canvas = $('.canvas');
            var context = canvas[0].getContext('2d');
            context.arc(100, 75, 70, 0, 2 * Math.PI, false);
            context.lineWidth = 3;
            context.strokeStyle = '#db4f36';
            context.stroke();
            context.closePath();



        });

        View.render();




    });





})();