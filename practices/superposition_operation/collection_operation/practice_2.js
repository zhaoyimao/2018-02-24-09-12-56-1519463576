'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var result=new Array();
  // for(var i=0;i<collection.length;i++){
  //   if(collection[i]%2!=0){
  //     result.push(collection[i]*3+2);
  //   }
  // }
  collection.map(function(element){
    return element%2!=0 && result.push(element*3+2);
  });
  return result;

}

module.exports = hybrid_operation_to_uneven;

