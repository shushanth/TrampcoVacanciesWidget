(function() {

    'use strict'
    //Model Collection with dependencies 

    define(

        ['jquery',
            'Underscore',
            'backbone'
        ], function($, _, backbone) {


            //collection of models ie JSON in this 
            var Collection = Backbone.Collection.extend({

                url: 'js/index.json'

            })

            return Collection;



        });

})();