'use strict';
var calculate_median = function(collection){
    var result;
    var new_arr=new Array();
    for(var i=1;i<collection.length;i=i+2){
        new_arr.push(collection[i]);
    }
    for(var i=0;i<new_arr.length;i++){
        if(new_arr.length%2!=0){
        result=new_arr[Math.floor(new_arr.length/2)];
        }else{
            result=(new_arr[new_arr.length/2]+new_arr[new_arr.length/2-1])/2;
        }
    }
    return result;
};
module.exports = calculate_median;
