/**
 * Created by nafigator on 15.11.2015.
 */


// Start the main app logic.
define(['jquery', 'underscore', 'backbone', 'http://192.168.56.1:8081/router.js'], function ($, _, Backbone, Router) {

  var router = new Router();
  Backbone.history.start();

  (document.getElementsByClassName('clickMe')[0]).addEventListener('click', function (event) {
    router.navigate('module', {trigger:true});
  });
});