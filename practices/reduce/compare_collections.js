'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var result=false;
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<collection_b.length;j++){
      if(collection_a[i]===collection_b[j]){
        result=true;
      }
    }
  }
  return result;
}

module.exports = compare_collections;


