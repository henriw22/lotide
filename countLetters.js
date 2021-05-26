const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  const result = {};
  for (const letters of sentence) {
    if (result[letters]) {
      result[letters] += 1;
    } else {
      result[letters] = 1;
    }
  }
  console.log(result);
  return result;
}

const test = countLetters('lighthouse lab lullaby');
console.log(test);

assertEqual(test["l"], 5);
assertEqual(test["a"], 2);
assertEqual(test["z"], undefined);
assertEqual(test["g"], 1);