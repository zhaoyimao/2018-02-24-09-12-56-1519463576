'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var result=false;
  // for(var i=0;i<collection_a.length;i++){
  //   for(var j=0;j<collection_b.length;j++){
  //     if(collection_a[i]===collection_b[j]){
  //       result=true;
  //     }
  //   }
  // }
  for(var i in collection_a){
    result=collection_b.reduce(function(pre,currentvalue,index,arr){
      return currentvalue===collection_a[i]?true:false;
    });
  }
  return result;
}

module.exports = compare_collections;


