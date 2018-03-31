'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result=new Array();
  
  do{
    result.push(number);
    number=Number((number-interval).toFixed(1)); 
  }while(number+interval>0)
  return result;
}

module.exports = spilt_to_zero;