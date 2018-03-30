'use strict';
var rank_asc = function(collection){
  //return [6,5,4,3,2];
  var temp;
  for(var i=0;i<collection.length;i++){
    for(var j=i+1;j<collection.length;j++){
      if(collection[i]<collection[j]){
        temp=collection[j];
        collection[j]=collection[i];
        collection[i]=temp;
      }
    }
  }
  return collection;
};

module.exports = rank_asc;
