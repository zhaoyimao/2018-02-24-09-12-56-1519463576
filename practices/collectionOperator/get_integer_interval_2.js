'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var result=new Array();
  // if(number_a<number_b){
  //   for(var i=number_a;i<=number_b;i++){
  //     if(i%2==0){
  //       result.push(i);
  //     }
  //   }
  // }else if(number_b<number_a){
  //   for(var i=number_a;i>=number_b;i--){
  //     if(i % 2==0){
  //       result.push(i);
  //     }
  //   }
  // }else if(number_a==number_b){
  //   if(number_a%2==0){
  //     result.push(number_a);
  //   }
  // }
  var a=number_a;
  var b=number_b;
  if(number_a>number_b){
    [number_a,number_b]=[number_b,number_a];
  }
  var temp=[];
  for(var i=number_a;i<=number_b;i++){
    temp.push(i);
  }
  //console.log(temp);
  result=temp.filter(function(value,index,arr){
    if(value%2==0){
      return result.push(value);
    }
  });
  if(a>b){
    result.reverse();
  }
  return result;


}

module.exports = get_integer_interval_2;
