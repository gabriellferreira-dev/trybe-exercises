// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function isPalindrome(stringValue) {
  let valueReverse = stringValue.split('').reverse().join('');

  if (stringValue === valueReverse) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome('arara'));
console.log('');

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function highestValueIndex(arrayNumbers) {
  let higherNumber = Math.max.apply(null, arrayNumbers);
  let theBiggest = 0;

  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (higherNumber > arrayNumbers[i]) {
      theBiggest = higherNumber;
    } else {
      theBiggest = arrayNumbers[i];
    }
  }
  return theBiggest;
}

console.log(highestValueIndex([1, 3, -2, 5, 10, 11]));