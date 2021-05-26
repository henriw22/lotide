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

const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    let check = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        check = false;
      }
    }
    if (check) {
      result.push(source[i]);
    }
  }
  return result;
};


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse", "hello"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
