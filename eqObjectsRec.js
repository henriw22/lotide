const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  if (key1.length !== key2.length) {
    return false;
  } else {
    for (let key of key1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!(eqArrays(object1[key], object2[key]))) {
          return false;
        }
      } 
      if (typeof (object1[key]) === 'object' && typeof (object1[key]) !== null) {
        let test = eqObjects(object1[key], object2[key]);
        if (test) {
          continue;
        }
      }
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  } 
};


console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
console.log(eqObjects({ a: { z: 1 }, b: {x: {y: 2, q: 1}, r: 3} }, { a: { z: 1 }, b: {x: {y: 2, q: 1}, r: 3} })); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false