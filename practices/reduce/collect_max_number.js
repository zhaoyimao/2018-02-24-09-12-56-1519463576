'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  var result=0;
  for(var i=0;i<collection.length;i++){
    if(collection[i]>result){
      result=collection[i];
    }
  }
  return result;
}

module.exports = collect_max_number;
