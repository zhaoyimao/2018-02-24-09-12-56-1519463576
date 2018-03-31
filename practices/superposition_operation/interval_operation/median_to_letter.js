'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var result, num;
  for(var i=0;i<collection.length;i++){
    if(collection.length%2==0){
      num=(collection[collection.length/2]+collection[collection.length/2-1])/2;
    }else{
      num=collection[Math.floor(collection.length/2)];
  }
}
result=get_letter(Math.ceil(num));
return result;
}
function get_letter(num){
  var result;
  var first=Math.floor(num/26);
  var second=num%26;
  if(first==0){
    result=String.fromCharCode(96+second);
  }else if(second==0){
    result=String.fromCharCode(96+first-1)+String.fromCharCode(96+second);
  }else{
    result=String.fromCharCode(96+first)+String.fromCharCode(96+second);
  }
  return result;
}
module.exports = median_to_letter;
