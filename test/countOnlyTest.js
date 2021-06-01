const assert = require('chai').assert;
const countOnly   = require('../countOnly');

describe("#countOnly", () => {
  it("returns 1 for 'Jason' in firstNames object based on the testCase", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("returns undefined for 'Karima' in firstNames object based on the testCase", () => {
    assert.strictEqual(result1["Karima"], undefined); 
  });

  it("returns 2 for 'Fang' in firstNames object based on the testCase", () => {
    assert.strictEqual(result1["Fang"], 2); 
  });

  it("returns undefined for 'Agouhanna' in firstNames object based on the testCase", () => {
    assert.strictEqual(result1["Agouhanna"], undefined); 
  });
});

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const testCase = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

const result1 = countOnly(firstNames, testCase);

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);