const middle = function (array) {
  let result = [];
  let index = Math.floor(array.length / 2);

  if (array.length <= 2) {
    return result;
  } else if ((array.length % 2) !== 0) {  
    result.push(array[index]);
  } else {
    result.push(array[index - 1]);
    result.push(array[index]);
  }
  return result;
};


module.exports = middle;
