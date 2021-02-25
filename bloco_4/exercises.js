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