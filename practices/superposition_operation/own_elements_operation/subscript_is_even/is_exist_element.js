'use strict';
var is_exist_element = function(collection,element){
    var result=false;
    for(var i=0;i<collection.length;i=i+2){
        if(collection[i]==element){
            result=true;
        }
    }
    return result;

};
module.exports = is_exist_element;
