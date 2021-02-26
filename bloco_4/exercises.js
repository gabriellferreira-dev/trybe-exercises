let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

// 2 - Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}

console.log('A soma dos números eh:', sum);

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = 0;

media = sum / numbers.length;

console.log('Média aritimética:', media);

// 4 - Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorNumero, oMaior = 0;
i = 0;
let num1 = numbers[i];

for (i = 0; i < numbers.length; i += 1) {
  let num2 = numbers[i + 1];

  if (num1 > num2) {
    oMaior = num1;
  } else if (num2 > num1) {
    oMaior = num2;
  } else if (num1 === num2) {
    oMaior = "Números iguais";
  }
  num1 = oMaior;
}
maiorNumero = oMaior;
console.log("O maior número éh:", maiorNumero);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numImpar = 0;
let numVerification;

for (i = 0; i < numbers.length; i += 1) { 
  numVerification = numbers[i] % 2;

  if (numVerification !== 0) {
    numImpar += 1;
  } else if (numImpar === 0) {
    console.log('Nenhum valor ímpar encontrado.');
  }
}

console.log('A quantidade de números ímpares éh:', numImpar);

// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menorNumero, oMenor = 0;
i = 0;
num1 = numbers[i];

for (i = 0; i < numbers.length; i += 1) {
  num2 = numbers[i + 1];

  if (num1 < num2) {
    oMenor = num1;
  } else if (num2 < num1) {
    oMenor = num2;
  } else if (num1 === num2) {
    oMenor = "Números iguais";
  }
  num1 = oMenor;
}
menorNumero = oMenor;
console.log("O menor número éh:", menorNumero);

// 8 - Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;

let array = [];

for (i = 1; i <= 25; i += 1) {
  array.push(i);
}
console.log(array);

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let divisao = 0;

for (i = 0; i < array.length; i += 1) {
  divisao = array[i] / 2;
  console.log('A divisão do',i + 1,'º número éh:', divisao);
}

// BÔNUS
// 1 - Ordene o array numbers em ordem crescente e imprima seus valores;

for (i = 0; i < numbers.length; i += 1) {
  for (let j = 0; j < i; j += 1) {
    if (numbers[i] < numbers[j]) {
      let position = numbers[i];

      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}
console.log('Array ordenada em ordem crescente: ');
console.log(numbers);