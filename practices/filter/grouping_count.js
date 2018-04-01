'use strict';

function grouping_count(collection) {
  //在这里写入代码
  var result={};
  var temp=new Array();
  var count;
  // for(var i=0;i<collection.length;i++){
  //   if(temp[collection[i]]){
  //     temp[collection[i]]++;
  //   }else{
  //     temp[collection[i]]=1;
  //   }
  // }
  var result1=collection.filter(function(element,index,arr){
    return arr.indexOf(element)!=index;
  });
  for(var i in result1){
    temp[result1[i]]=1;
  }
    collection.filter(function(element,index,arr){
    return arr.indexOf(element)!=index && temp[element]++; 
  });
  for(let key in temp){
    result[key]=temp[key];
  }
  return result;
}
module.exports = grouping_count;
