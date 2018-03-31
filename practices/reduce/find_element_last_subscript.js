'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  collection.reverse();
  var result=collection.indexOf(element);
  return collection.length-result-1;

}

module.exports = calculate_elements_sum;
