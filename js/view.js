(function() {



    //view for the Model collection with depenedencies

    define(['jquery', 'Underscore', 'backbone', 'handlebars', '../js/model'], function($, _, backbone, handlebars, mainModel) {




        //view for  modelCollection

        var View = Backbone.View.extend({


            el: '.main',

            render: function() {

                var parent = this;
                //instance of model collection

                var collection = new mainModel();


                //sync reading data from JSON

                collection.sync('read', collection, {

                    success: function(collection) {

                        //underscore template
                        var template = Handlebars.compile($('#employees').html());
                        var temp = template(collection);
                        parent.$el.html(temp);
                        //random generation of broder colors for the widget developed
                        parent.randomLeftBorder();


                    },

                    error: function() {

                        console.log('error');
                    }


                })


            },

            randomLeftBorder: function() {

                var parent = this,
                    r = 140,
                    g = 200,
                    b = 160,
                    pElements = parent.$el.find('.Maincontainer section'),
                    noOfPTags = pElements.length,
                    R, G, B;

                setInterval(function() {
                    R = Math.round(Math.random() * r),
                    G = Math.round(Math.random() * g),
                    B = Math.round(Math.random() * b),
                    randomPs = Math.round(Math.random() * noOfPTags);
                    parent.$el.find('.Maincontainer section').eq(randomPs).css('border-left', '7px solid rgba(' + R + ', ' + G + ', ' + B + ', 0.90)');


                }, 1000);


            }

        });


        return new View;



    });

})()