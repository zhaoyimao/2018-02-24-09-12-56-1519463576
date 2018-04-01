function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result=new Array();
  //var value=object_b.value;
  // for(var i=0;i<collection_a.length;i++){
  //   for(var j=0;j<value.length;j++){
  //     if(collection_a[i] == value[j]){
  //       result.push(collection_a[i]);
  //     }
  //   }
  // }
  for(let i in collection_a){
    object_b.value.filter(function(element){
      return collection_a[i]==element && result.push(collection_a[i]);
    });
  }
  return result;

}
module.exports = collect_same_elements;
