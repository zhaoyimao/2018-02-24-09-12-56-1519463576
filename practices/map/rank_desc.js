'use strict';
var rank_desc = function(collection){
  //return [2,3,4,5,6];
  var result=[];
  // for(var i=0;i<collection.length;i++){
  //   for(var j=i+1;j<collection.length;j++){
  //     if(collection[i]>collection[j]){
  //       temp=collection[i];
  //       collection[i]=collection[j];
  //       collection[j]=temp;
  //     }
  //   }
  // }
  result=collection.sort(function(x,y){
    if(x>y){
      return 1;
    }else{
      return -1;
    }
  });
  return result;
};

module.exports = rank_desc;
