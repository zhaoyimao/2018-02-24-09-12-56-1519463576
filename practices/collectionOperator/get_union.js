'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var result=new Array();
  result=collection_a;
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<collection_b.length;j++){
      if(collection_a[i]==collection_b[j]){
        collection_b.splice(j,1);
      }
    }
  }
  for(var i=0;i<collection_b.length;i++){
    result.push(collection_b[i]);
  }
  return result;
}

module.exports = get_union;

