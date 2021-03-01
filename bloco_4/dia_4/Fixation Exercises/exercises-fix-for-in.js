// 1 - Faça cinco programas, um para cada operação aritmética básica.

function arithmeticOperations(a, b) {
  let operation = 'multiplication';

  if (operation === 'sum') {
    return a + b;
  } else if (operation === 'subtraction') {
    return a - b;
  } else if (operation === 'multiplication') {
    return a * b;
  } else if (operation === 'division') {
    return a / b;
  } else if (operation === 'module') {
    return a % b;
  }

}

console.log(arithmeticOperations(2, 3));