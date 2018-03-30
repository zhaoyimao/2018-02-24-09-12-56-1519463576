'use strict';

function grouping_count(collection) {
  //在这里写入代码
  var result={};
  var temp=new Array();
  for(var i=0;i<collection.length;i++){
    if(temp[collection[i]]){
      temp[collection[i]]++;
    }else{
      temp[collection[i]]=1;
    }
  }
  for(let key in temp){
    result[key]=temp[key];
  }
  return result;
}
module.exports = grouping_count;
