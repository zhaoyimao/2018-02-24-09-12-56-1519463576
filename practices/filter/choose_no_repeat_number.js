'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
  var result=new Array();
  for(var i=0;i<collection.length;i++){
    if(result.indexOf(collection[i])==-1){
      result.push(collection[i]);
    }
  }
  return result;
  }

module.exports = choose_no_repeat_number;
