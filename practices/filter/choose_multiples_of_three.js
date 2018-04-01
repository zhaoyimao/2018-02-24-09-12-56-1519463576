'use strict';

function choose_multiples_of_three(collection) {
  //在这里写入代码
var result=new Array();
// for(var i=0;i<collection.length;i++){
//   if(collection[i]%3==0){
//     result.push(collection[i]);
//   }
// }
result=collection.filter(function(x){
  return x%3==0;
})
 return result;
}

module.exports = choose_multiples_of_three;
