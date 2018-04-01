'use strict';
var even_asc_odd_desc = function(collection){
    var result=new Array();
    var ou_arr=[];
    var ji_arr=[];
    collection.filter(function(element,index){
        if(element%2==0){
            return ou_arr.push(element);
        }else{
            return ji_arr.push(element);
        }
    });
    ou_arr.sort(function(x,y){
        return x-y;
    });
    ji_arr.sort(function(x,y){
        return y-x;
    });
   // ji_arr.reverse();
    result=ou_arr.concat(ji_arr);
   
    // for(var i=0;i<collection.length;i++){
    //     if(collection[i]%2==0){
    //         ou_arr.push(collection[i]);
    //     }else{
    //         ji_arr.push(collection[i]);
    //     }
    // }
    // ou_arr=num_sort(ou_arr);
    // ji_arr=num_sort(ji_arr);
    // ji_arr.reverse();
    // result=ou_arr;
    // for(var i=0;i<ji_arr.length;i++){
    //     result.push(ji_arr[i]);
    // }
    return result;
};

module.exports = even_asc_odd_desc;
