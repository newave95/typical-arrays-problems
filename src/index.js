
exports.min = function min (array = 1) {
  if(array == 1){
    return 0;
  }else if(array.length == 0){
    return 0;
  }
  return Math.min(...array);
}

exports.max = function max (array = 1) {
  if(array == 1){
    return 0;
  }else if(array.length == 0){
    return 0;
  }
  return Math.max(...array);
}

exports.avg = function avg (array = 1) {
  if(array == 1){
    return 0;
  }else if(array.length == 0){
    return 0;
  }
  let total = 0;
  for(i of array){
    total += i;
  }
  return total/array.length;
}
