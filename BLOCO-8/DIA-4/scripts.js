// 1 --------------------------

const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  let array = arrays.reduce((previous, item) => previous.concat(item), []);
  return array;
}

console.log(flatten());

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);