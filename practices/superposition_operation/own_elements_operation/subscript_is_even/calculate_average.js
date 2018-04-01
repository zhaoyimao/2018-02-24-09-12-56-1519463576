'use strict';
var calculate_average = function(collection){
var result;
var sum=0;
var count=0;
// for(var i=1;i<collection.length;i=i+2){
//    sum=sum+collection[i];
//    count++;
// }
var temp=[];
var temp1=collection.filter(function(element,index){
return index%2-1 == 0 && temp.push(element) &&count++;
});
sum=temp.reduce(function(x,y){
    return x+y;
},0);
result=sum/count;
return result;
};
var collection_a = [1, 2, 3, 4, 5, 6];
calculate_average(collection_a);
module.exports = calculate_average;
