'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var num=0;
  var result=collection.split('->');
  var result1=new Array();
  for(var i=0;i<result.length;i++){
    result1.push(Number(result[i]));
  }
  // for(var i=0;i<result1.length;i++){
  //   for(var j=i+1;j<result1.length;j++){
  //     if(result1[i]>result1[j]){
  //       var temp=result1[j];
  //       result1[j]=result1[i];
  //       result1[i]=temp;
  //     }
  //   }
  // }
   result1.sort(sort_num);
  // console.log(result1);
  if(result1.length%2!=0){
    var key=Math.floor(result1.length/2);
    num=result1[key];
  }else{
    var key=result1.length/2;
    num=(result1[key-1]+result1[key])/2;
  }
  // var num=result1.reduce(function(x,y,index,arr){
  //   return index==Math.floor(arr.length/2)?(arr[index-1]+arr[index])/2:arr[index];
  // });
  // console.log(Math.floor(result1.length/2));
  // console.log(num);
  return num;
}
function sort_num(m,n){
  return m-n;
}

module.exports = compute_chain_median;
