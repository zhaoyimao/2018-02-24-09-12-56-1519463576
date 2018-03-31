function count_same_elements(collection) {
  //在这里写入代码
  var result=new Array();
  var count_array=new Array();
  
  for(var i=0;i<collection.length;i++){
    if(count_array[collection[i]]){
      count_array[collection[i]]++;
    }else{
      count_array[collection[i]]=1;
    }
  }
  
  for(var i in count_array){
    var Object_array={};
     Object_array.key=i;
    Object_array.count=count_array[i];
    result.push(Object_array);
  }
  return result;
}
 
module.exports = count_same_elements;
