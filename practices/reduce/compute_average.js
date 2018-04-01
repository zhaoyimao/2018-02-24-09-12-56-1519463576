'use strict';

function compute_average(collection) {
  //在这里写入代码
  var result;
  var sum=0;
  sum=collection.reduce(function(x,y){
    return x+y;
  })
  result=sum/collection.length;
  return result;
}

module.exports = compute_average;

