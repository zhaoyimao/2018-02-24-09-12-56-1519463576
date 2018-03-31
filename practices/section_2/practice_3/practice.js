function count_same_elements(collection) {
  //在这里写入代码
  var result=new Array();
  var new_array=new Array();
  var teg=/\d+/g;
  
for(var i=0;i<collection.length;i++){
  var num=collection[i].match(teg);
    if(num){
    var arr=collection[i].split(/[-_:[]/);
    if(new_array[arr[0]]){
      new_array[arr[0]]=Number(new_array[arr[0]])+Number(num);
    }else{
    new_array[arr[0]]=Number(num);
    }
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
    new_object.name=i;
    new_object.summary=new_array[i];
    result.push(new_object);
  }
  return result;
}

module.exports = count_same_elements;
