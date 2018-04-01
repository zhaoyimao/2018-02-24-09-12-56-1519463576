'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  //在这里写入代码
  //var result=new Array();
  // for(var i=0;i<collection_a.length;i++){
  //   for(var j=0;j<collection_b.length;j++){
  //     if(collection_a[i]==collection_b[j]){
  //       collection_a.splice(i,1);
  //       collection_b.splice(j,1);
  //     }
  //   }
  // }
  // result=collection_a;
  // for(var i=0;i<collection_b.length;i++){
  //   result.push(collection_b[i]);
  // }
  for(var i in collection_a){
    collection_b.filter(function(element,index,arr){
      return element == collection_a[i] && collection_a.splice(i,1);
    });
  }
  return collection_a;
}

module.exports = choose_no_common_elements;
