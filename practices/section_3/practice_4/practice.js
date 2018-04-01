function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result=get_arr_count(collection_a);
  // var value=object_b.value;
  // for(var i=0;i<result.length;i++){
  //   for(var j=0;j<value.length;j++){
  //     if(result[i].key==value[j]){
  //       result[i].count=result[i].count-Math.floor(result[i].count/3);
  //     }
  //   }
  // }
  for(var i in result){
    object_b.value.filter(function(element){
      if(result[i].key==element){
        result[i].count=result[i].count-Math.floor(result[i].count/3);
        return result[i].count;
      }
    })
  }
  return result;
}
function get_arr_count(collection_a){
  var result=new Array();
  var new_array=new Array();
  for(var i=0;i<collection_a.length;i++){
    var str=collection_a[i].split("-");
    if(str.length>1){
      new_array[str[0]]=Number(str[1]);
    }else{
      if(new_array[collection_a[i]]){
        new_array[collection_a[i]]++;
      }else{
        new_array[collection_a[i]]=1;
      }
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
