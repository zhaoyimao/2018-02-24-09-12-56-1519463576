'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var result;
  collection.reverse();
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2==0){
      result=collection[i];
      break;
    }
  }
  return result;
}

module.exports = find_last_even;
