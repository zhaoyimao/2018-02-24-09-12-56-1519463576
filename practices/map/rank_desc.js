'use strict';
var rank_desc = function(collection){
  //return [2,3,4,5,6];
  var temp;
  for(var i=0;i<collection.length;i++){
    for(var j=i+1;j<collection.length;j++){
      if(collection[i]>collection[j]){
        temp=collection[i];
        collection[i]=collection[j];
        collection[j]=temp;
      }
    }
  }
  return collection;
};

module.exports = rank_desc;
