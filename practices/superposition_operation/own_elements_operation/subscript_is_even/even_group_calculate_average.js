'use strict';
var even_group_calculate_average = function(collection){
var result=new Array();
var temp=new Array();
for(var i=1;i<collection.length;i=i+2){
    temp.push(collection[i]);
}
var ou_array=[];
for(var i=0;i<temp.length;i++){
    if(temp[i]%2==0){
        ou_array.push(temp[i]);
    }
}
var temp1=[];
var temp2=[];
var temp3=[];
var sum1=0;
var sum2=0;
var sum3=0;
if(ou_array.length>0){
    for(var i=0;i<ou_array.length;i++){
        if(ou_array[i]/100>=1){
           temp1.push(ou_array[i]);
           sum1=sum1+ou_array[i];
        }else if(ou_array[i]/10>=1){
            temp2.push(ou_array[i]);
            sum2=sum2+ou_array[i];
        }else{
            temp3.push(ou_array[i]);
            sum3=sum3+ou_array[i];
        }
    }
    if(temp2.length==0 && temp3.length==0){
       var ave=sum1/temp1.length; 
       result.push(ave);
    }else{
        result.push(sum3/temp3.length);
        result.push(sum2/temp2.length);
        result.push(sum1/temp1.length);
        
    }
}else{
    result.push(0);
}
return result;
};
module.exports = even_group_calculate_average;
