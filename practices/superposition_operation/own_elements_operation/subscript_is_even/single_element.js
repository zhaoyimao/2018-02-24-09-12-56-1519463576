'use strict';
var single_element = function(collection){
var result=new Array();
var temp=new Array();
for(var i=1;i<collection.length;i=i+2){
    temp.push(collection[i]);
}
var str=[];
var str1=[];
for(var i=0;i<temp.length;i++){
    if(str.indexOf(temp[i])==-1){
        str.push(temp[i]);
    }else{
        str1.push(temp[i]);
    }
}

for(var i=0;i<str.length;i++){
    for(var j=0;j<str1.length;j++){
        if(str[i]==str[j]){
            str.splice(i,1);
        }
    }
}
result=num_sort(str);
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

module.exports = single_element;
