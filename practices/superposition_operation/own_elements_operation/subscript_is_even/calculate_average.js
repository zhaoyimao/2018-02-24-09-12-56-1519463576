'use strict';
var calculate_average = function(collection){
var result;
var sum=0;
var count=0;
for(var i=1;i<collection.length;i=i+2){
   sum=sum+collection[i];
   count++;
}
result=sum/count;
return result;
};
module.exports = calculate_average;
