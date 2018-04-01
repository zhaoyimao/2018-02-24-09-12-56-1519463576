'use strict';
var flatten=require('array-flatten');

function double_to_one(collection) {

  //在这里写入代码
  var result=new Array();
  // for(var i=0;i<collection.length;i++){
  //   if(Array.isArray(collection[i])){
  //     for(var j=0;j<collection[i].length;j++){
  //       result.push(collection[i][j]);
  //     }
  //   }else{
  //     result.push(collection[i]);
  //   }
  // }
  // result=no_repeat(result);
  result=flatten(collection);
  var temp=result.filter(function(element,index,arr){
    return arr.indexOf(element)===index;
  });
  return temp;
}
// function no_repeat(collection){
//   var result=new Array();
//   for(var i=0;i<collection.length;i++){
//     if(result.indexOf(collection[i])==-1){
//       result.push(collection[i]);
//     }
//   }
//   return result;
// }

module.exports = double_to_one;
