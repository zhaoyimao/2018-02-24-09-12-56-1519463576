'use strict';

function choose_even(collection) {

  //在这里写入代码
  var result=new Array();
  // for(var i=0;i<collection.length;i++){
  //   if(collection[i]%2==0){
  //     result.push(collection[i]);
  //   }
  // }
  result=collection.filter(function(x){
    return x%2==0;
  });
  return result;
}

module.exports = choose_even;
