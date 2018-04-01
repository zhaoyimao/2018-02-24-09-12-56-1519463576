'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var result;
  var sum=0;
  // for(var i=0;i<collection.length;i++){
  //   sum=sum+collection[i];
  // }
  sum=collection.reduce(function(x,y){
    return x+y;
  });
  var ave=Math.ceil(sum/collection.length);
  result=String.fromCharCode(96+ave);
  return result;
}

module.exports = average_to_letter;

