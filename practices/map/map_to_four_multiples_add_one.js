'use strict';
var map_to_four_multiples_add_one = function(collection){
  //return [5,9,13,17,21];
  var result=new Array();
  // for(var i=0;i<collection.length;i++){
  //   result.push(collection[i]*4+1);
  // }
  result=collection.map(function(element,index,arr){
    return element*4+1;
  });
  return result;
};

module.exports = map_to_four_multiples_add_one;
