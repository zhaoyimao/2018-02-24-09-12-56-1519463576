'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  var result=[];
  result=collection.sort(function(x,y){
    return x-y;
  });
  for(var i=0;i<result.length-3;i=i+3){
    var temp=result[i];
    result[i]=result[i+1];
    result[i+1]=result[i+2];
    result[i+2]=temp;
  }
  return result;
}

module.exports = rank_by_two_large_one_small;
