'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var result=new Array();
  if(number_a<number_b){
    for(var i=number_a;i<=number_b;i++){
      result.push(get_letter(i));
    }
  }else if(number_a>number_b){
    for(var i=number_a;i>=number_b;i--){
      result.push(get_letter(i));
    }
  }else if(number_a==number_b){
    result.push(get_letter(number_a));
  }
return result;
}
function get_letter(number_a){
  var first=Math.floor(number_a/26);
  var second=number_a%26;
  var str='';
  if(first==0){
    str=String.fromCharCode(96+second);
  }else{
    if(second==0){
      if(first==1){
        str=String.fromCharCode(96+26);
      }else{
       for(var i=0;i<first;i++){
      str=String.fromCharCode(96+first-1)+String.fromCharCode(96+26);
    }
      }
    }else{
    for(var i=0;i<first;i++){
      str=String.fromCharCode(96+first)+String.fromCharCode(96+second);
    }
    }
  }
  return str;
}

module.exports = get_letter_interval_2;

