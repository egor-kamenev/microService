/**
 * Created by nafigator on 14.11.2015.
 */

requirejs.config({

  paths:{
    app : './app',
    jquery: './bower_components/jquery/dist/jquery',
    underscore: './bower_components/underscore/underscore',
    backbone: './bower_components/backbone/backbone'
  }

});


require(['app'], function(){



});