function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result=new Array();
  var value=object_b.value;
  var a_value=new Array();
  for(var i=0;i<collection_a.length;i++){
    a_value.push(collection_a[i].key);
  }
  for(var i=0;i<a_value.length;i++){
    for(var j=0;j<value.length;j++){
      if(a_value[i]==value[j]){
        result.push(a_value[i]);
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
