'use strict';
var number_map_to_word = function(collection){
  //return ['a','b','c','d','e'];
  var result=new Array();
  // for(var i=0;i<collection.length;i++){
  //   var letter=String.fromCharCode(96+collection[i]);
  //   result.push(letter);
  // }
  result=collection.map(function(element){
    return String.fromCharCode(96+element);
  })
  return result;
};

module.exports = number_map_to_word;
