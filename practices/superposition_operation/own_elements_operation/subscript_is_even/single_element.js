'use strict';
var single_element = function(collection){
var resul=new Array();
// var temp=new Array();
var str=[];
 var str1=[];
collection.filter(function(element,index,arr){
    if(index%2!=0){
        if(str.indexOf(element)==-1){
            return str.push(element);
        }else{
            return str1.push(element);
        }
    }
});
// for(var i=1;i<collection.length;i=i+2){
//     temp.push(collection[i]);
// }
// var str=[];
// var str1=[];
// for(var i=0;i<temp.length;i++){
//     if(str.indexOf(temp[i])==-1){
//         str.push(temp[i]);
//     }else{
//         str1.push(temp[i]);
//     }
// }

for(var i=0;i<str.length;i++){
    for(var j=0;j<str1.length;j++){
        if(str[i]==str[j]){
            str.splice(i,1);
        }
    }
}
// result=num_sort(str);
str.sort(function(x,y){
    return x-y;
});
return str;
};


module.exports = single_element;
