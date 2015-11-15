/**
 * Created by nafigator on 15.11.2015.
 */

define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {

  var AppRouter = Backbone.Router.extend({
    routes:{
      'module' : 'module'
    },

    module: function(){
      require(['http://192.168.56.1:8080/module.js']);
    }
  });

  return AppRouter;


});