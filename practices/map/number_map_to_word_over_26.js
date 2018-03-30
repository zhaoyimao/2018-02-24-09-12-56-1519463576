'use strict';
var number_map_to_word_over_26 = function(collection){
  //return ['a','m','aa','ad','y','aa'];
  var result=new Array();
  for(var i=0;i<collection.length;i++){
    var letter=get_letter(collection[i]);
    result.push(letter);
  }
return result;
};
function get_letter(onenumber){
  var letter;
  var first=Math.floor(onenumber/26);
  var second=onenumber%26;
  if(first==0){
    letter=String.fromCharCode(96+second);
  }else if(second==0){
    if(first==1){
      letter=String.fromCharCode(96+26);
    }else{
      for(var i=0;i<first;i++){
        letter=String.fromCharCode(96+first-1)+String.fromCharCode(96+second);
      }
    }
  }else{
    letter=String.fromCharCode(96+first)+String.fromCharCode(96+second);
  }
  return letter;
}

module.exports = number_map_to_word_over_26;
