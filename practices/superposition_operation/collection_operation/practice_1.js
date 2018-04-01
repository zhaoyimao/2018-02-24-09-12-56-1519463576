'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var sum=0;
  // for(var i=0;i<collection.length;i++){
  //   collection[i]=collection[i]*3+2;
  //   sum=sum+collection[i];
  // }
  sum=collection.reduce(function(x,y){
    return x+(y*3+2);
  },0);
  return sum;
}

module.exports = hybrid_operation;

