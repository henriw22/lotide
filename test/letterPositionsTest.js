const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [0, 11, 15, 17, 18] for the letter 'l' in 'lighthouse lab lullaby'", () => {
    assert.deepEqual(letterPositions("lighthouse lab lullaby")["l"], [0, 11, 15, 17, 18]);
  });

  it("returns [3, 5] for the letter 'h' in 'lighthouse lab lullaby'", () => {
    assert.deepEqual(letterPositions("lighthouse lab lullaby")["h"], [3, 5]); 
  });

  it("returns [12, 19] for the letter 'a' in 'lighthouse lab lullaby'", () => {
    assert.deepEqual(letterPositions("lighthouse lab lullaby")["a"], [12, 19]); 
  });

});

// letterPositions("lighthouse lab lullaby");
// console.log(letterPositions("lighthouse lab lullaby"));
