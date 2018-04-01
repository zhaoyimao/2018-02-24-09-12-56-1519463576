var flatten=require('array-flatten');
function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result=new Array();
  // for(var i=0;i<collection_a.length;i++){
  //   for(var j=0;j<collection_b[0].length;j++){
  //     if(collection_a[i]==collection_b[0][j]){
  //       result.push(collection_a[i]);
  //     }
  //   }
  // }
  var arr= flatten(collection_b);
  for(let i in collection_a){
    arr.filter(function(element){
      return collection_a[i]==element && result.push(collection_a[i]);
    });
  }
  return result;
}

module.exports = collect_same_elements;
