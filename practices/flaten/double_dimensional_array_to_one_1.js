'use strict';

function double_to_one(collection) {
  var result = [];
  putIn(collection[0],result);
  for(var i=0;i<collection.length;i++){
    for(var j=0;j<collection[i].length;j++)
      putIn(collection[i][j],result);
  }
  return result;
}

function putIn(a,str){
  str.push(a);
}

module.exports = double_to_one;
