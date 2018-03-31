'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var result=new Array();
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2==0){
      var str=String.fromCharCode(96+collection[i]);
      result.push(str);
    }
  }
  return result;
}

module.exports = even_to_letter;
