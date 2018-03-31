function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var value=object_b.value;
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<value.length;j++){
      if(collection_a[i].key==value[j]){
        collection_a[i].count=collection_a[i].count-1;
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
