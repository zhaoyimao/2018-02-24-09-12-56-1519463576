function count_same_elements(collection) {
  //在这里写入代码
  var result=new Array();
  var new_array=new Array();
  for(var i=0;i<collection.length;i++){
    var num=collection[i].split('-');
    if(num.length>1){
      new_array[num[0]]=Number(num[1]);
    }else{
      if(new_array[collection[i]]){
        new_array[collection[i]]++;
      }else{
        new_array[collection[i]]=1;
      }
    }   
  }
  for(var i in new_array){
    var new_object={};
    new_object.key=i;
    new_object.count=new_array[i];
    result.push(new_object);
  }
  return result;
}

module.exports = count_same_elements;
