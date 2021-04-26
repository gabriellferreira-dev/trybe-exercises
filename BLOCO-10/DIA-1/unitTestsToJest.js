const functions = {
  sum: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
    
    return a + b;
  },
  myRemove: (arr, item) => {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  },
  myRemoveWithoutCopy: (arr, item) => {
    for (let index = 0, len = arr.length; index < len; index += 1) {
      if (arr[index] === item) {
        arr.splice(index, 1);
        index -= 1;
        len -= 1;
      }
    }
  
    return arr;
  },
  myFizzBuzz: (num) => {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }
}

const jsons = {
  obj1: {
    title: 'My Title',
    description: 'My Description',
  },
  obj2: {
    description: 'My Description',
    title: 'My Title',
  },  
  obj3: {
    title: 'My Different Title',
    description: 'My Description',
  }
};

module.exports = { functions,
jsons };
