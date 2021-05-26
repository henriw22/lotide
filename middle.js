const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅✅✅ Assertion Passed:", arr1, "===", arr2);
  } else {
    console.log("🔴🔴🔴 Assertion Failed:", arr1, "!==", arr2);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

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


assertArraysEqual(middle([]),[]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]),[4, 5]);