'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var result=new Array();
  // for(var i=0;i<collection.length;i++){
  //   if(collection[i]%2==0){
  //     var str=String.fromCharCode(96+collection[i]);
  //     result.push(str);
  //   }
  // }
    collection.map(function(element){
    return  element%2==0 && result.push(String.fromCharCode(96+element)); 
  });
  return result;
}

module.exports = even_to_letter;
