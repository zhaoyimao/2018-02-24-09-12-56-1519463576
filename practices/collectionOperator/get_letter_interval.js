'use strict';

function get_letter_interval(number_a, number_b) {
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
function get_letter(a){
  var str=String.fromCharCode(96+a);
  return str;
}
module.exports = get_letter_interval;
