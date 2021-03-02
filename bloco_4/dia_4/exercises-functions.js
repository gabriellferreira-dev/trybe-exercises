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
