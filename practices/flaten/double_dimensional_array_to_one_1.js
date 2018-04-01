'use strict';
var flatten = require('array-flatten')

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
  result=flatten(collection);
  return result;
}
module.exports = double_to_one;
