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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const result1 = map(words, word => word[0]);
console.log(result1);

const result2 = map(words, word => word);
const result3 = map(words, word => word + "ing");

assertArraysEqual(result1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(result2, ["ground", "control", "to", "major", "tom"]);
assertArraysEqual(result3, ["grounding", "controling", "toing", "majoring", "toming"]);


