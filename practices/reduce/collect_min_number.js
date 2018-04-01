'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  // var result=collection[0];
  // for(var i=0;i<collection.length;i++){
  //   if(collection[i]<result){
  //     result=collection[i];
  //   }
  // }
  var result=collection.reduce(function(x,y){
    return x<y?x:y;
  });
  return result;
}

module.exports = collect_min_number;

