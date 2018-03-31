function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var arr=get_arr_count(collection_a);
  var value=object_b.value;
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<value.length;j++){
      if(arr[i].key==value[j]){
        arr[i].count=arr[i].count-Math.floor(arr[i].count/3);
      }
    }
  }
return arr;
}
function get_arr_count(collection_a){
  var result=new Array();
  var new_array=new Array();
  for(var i=0;i<collection_a.length;i++){
    if(new_array[collection_a[i]]){
      new_array[collection_a[i]]++;
    }else{
      new_array[collection_a[i]]=1;
    }
  }
  for(var i in new_array){
    var temp={};
    temp.key=i;
    temp.count=new_array[i];
    result.push(temp);
  }
  return result;
}

module.exports = create_updated_collection;
