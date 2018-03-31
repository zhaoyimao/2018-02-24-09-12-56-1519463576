'use strict';

function compute_median(collection) {
  //在这里写入代码
  var num;
 // number_sort(collection);
 collection.sort(number_sort);
 
  if(collection.length%2==0){
    var ave_key=collection.length/2;
    num=(collection[ave_key]+collection[ave_key-1])/2;
  }else{
    var ave_key=Math.floor(collection.length/2);
    num=collection[ave_key];
  }
  return num;

}

function number_sort(m,n){
  return m-n;
}
module.exports = compute_median;


