'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  var result=[];
  result=num_sort(collection);
  for(var i=0;i<result.length-3;i=i+3){
    var temp=result[i];
    result[i]=result[i+1];
    result[i+1]=result[i+2];
    result[i+2]=temp;
  }
  return result;
}
function num_sort(collection){
  for(var i=0;i<collection.length;i++){
    for(var j=i+1;j<collection.length;j++){
      if(collection[i]>collection[j]){
        var temp=collection[i];
        collection[i]=collection[j];
        collection[j]=temp;
      }
    }
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
