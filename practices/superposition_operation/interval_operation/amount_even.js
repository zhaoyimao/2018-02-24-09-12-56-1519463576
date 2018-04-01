'use strict';

function amount_even(collection) {

  //在这里写入代码
  //var sum=0;
  // for(var i=0;i<collection.length;i++){
  //   if(collection[i]%2==0){
  //     sum=sum+collection[i];
  //   }
  // }
  var temp=[];
  collection.map(function(element){
    return element%2==0 && temp.push(element);
  });
  var sum=temp.reduce(function(x,y){
    return x+y;
  },0);
  return sum;
}

module.exports = amount_even;
