// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 6;
let forma = '';

for (let i = 1; i < n; i += 1) {
  forma += '*';
}

for (let j = 0; j < n; j += 1) {
  let figura = '';
  figura += forma;
  console.log(figura);
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 
let triangulo = '';
console.log('');

for (let i = 1; i < n; i += 1) {
  triangulo += '*';
  console.log(triangulo);
}

// 3- Agora inverta o lado do triângulo.
triangulo = '';
console.log('');
let espaco = '';

for (i = 1; i < n; i += 1) {
  triangulo += '*';
  for (let j = 1; j < n - triangulo.length; j += 1) {
    espaco += ' ';
  }
  invert = espaco + triangulo;
  console.log(invert);
  espaco = '';
}

// 4- Depois, faça uma pirâmide com n asteriscos de base:
console.log('');
let piramide = '';
let caracter = '*';

for (piramide = ''; piramide.length < n; piramide += '*') {
  piramide += caracter;
  console.log(piramide);
}