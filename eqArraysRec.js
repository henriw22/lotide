const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      // console.log(Array.isArray(arr1[i]));
      if (Array.isArray(arr1[i])){
        let test = eqArrays(arr1[i], arr2[i]);
        if (test) {
          continue;
        }
      } 
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};


console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
console.log(eqArrays([[2, 3], [[4], [2, 3]]], [[2, 3], [[4], [2, 3]]]));
console.log(eqArrays([[[2, 3], [4], [[4], [2, 3]]]], [[[2, 3], [4], [[4], [2, 3]]]]));
console.log(eqArrays([[[2, 3], [4], [[4], [2, 2]]]], [[[2, 3], [4], [[4], [2, 3]]]]));