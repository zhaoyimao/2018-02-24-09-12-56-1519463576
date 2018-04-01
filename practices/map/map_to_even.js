'use strict';
function map_to_even(collection){
  //return [2,4,6,8,10];
  var result=new Array();
  // for(var i=0;i<collection.length;i++){
  //   result.push(collection[i]*2);
  // }
  result=collection.map(function(element,index,arr){
    return element*2;
  });
  return result;
}
module.exports = map_to_even;
