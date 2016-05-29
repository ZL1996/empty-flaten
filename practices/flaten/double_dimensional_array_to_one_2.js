'use strict';

function double_to_one(collection) {
  var result1 = [];
  for(var i=0;i<collection.length;i++){
    for(var j=0;j<collection[i].length;j++){
      result1.push(collection[i][j]);
    }
  }
  var result = Delete(result1);
  return result;
}

function Delete(a){
  for(var i=0;i<a.length-1;i++){
    for(var j=i+1;j<a.length;j++){
      if(a[i] == a[j])
        a.splice(j,1);
    }
  }
  return a;
}
module.exports = double_to_one;
