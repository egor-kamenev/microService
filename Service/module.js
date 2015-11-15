/**
 * Created by nafigator on 14.11.2015.
 */
define(['http://192.168.56.1:8080/module2.js'], function(mod2){

  function print(text){
    console.log(text);
  }

  print(mod2);

});