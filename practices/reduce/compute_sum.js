'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  var result=0;
  // for(var i=0;i<collection.length;i++){
  //   result=result+collection[i];
  // }
  result=collection.reduce(function(x,y){
    return x+y;
  });
  return result;
}

module.exports = calculate_elements_sum;

