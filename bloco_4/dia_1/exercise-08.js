// 8 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

let num1 = 15;
let num2 = 13;
let num3 = 23;

if ((num1 % 2) === 0 || (num2 % 2) === 0 || (num3 % 2) === 0 ) {
  console.log('true');
} else {
  console.log('false');
}