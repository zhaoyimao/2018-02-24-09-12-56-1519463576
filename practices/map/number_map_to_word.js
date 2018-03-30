'use strict';
var number_map_to_word = function(collection){
  //return ['a','b','c','d','e'];
  var result=new Array();
  for(var i=0;i<collection.length;i++){
    var letter=String.fromCharCode(96+collection[i]);
    result.push(letter);
  }
  return result;
};

module.exports = number_map_to_word;
