'use strict';
var even_asc_odd_desc = function(collection){
    var result=new Array();
    var ou_arr=[];
    var ji_arr=[];
    for(var i=0;i<collection.length;i++){
        if(collection[i]%2==0){
            ou_arr.push(collection[i]);
        }else{
            ji_arr.push(collection[i]);
        }
    }
    ou_arr=num_sort(ou_arr);
    ji_arr=num_sort(ji_arr);
    ji_arr.reverse();
    result=ou_arr;
    for(var i=0;i<ji_arr.length;i++){
        result.push(ji_arr[i]);
    }
    return result;
};
function num_sort(collection){
    for(var i=0;i<collection.length;i++){
        for(var j=i+1;j<collection.length;j++){
            if(collection[i]>collection[j]){
                var temp=collection[i];
                collection[i]=collection[j];
                collection[j]=temp;
            }
        }
    }
    return collection;
}
module.exports = even_asc_odd_desc;
