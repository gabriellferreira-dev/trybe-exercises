// 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 3000;
let parcelInss;
let valorlIr;
let salarioBase;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
  parcelInss = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  parcelInss = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  parcelInss = salarioBruto * 0.11;
} else if (salarioBruto > 5189.82) {
  parcelInss = 570.88;
}

salarioBase = salarioBruto - parcelInss;

if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  valorlIr = (salarioBase * 0.075) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  valorlIr = (salarioBase * 0.15) - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  valorlIr = (salarioBase * 0.225) - 636.13;
} else if (salarioBase > 4664.68) {
  valorlIr = (salarioBase * 0.275) - 869.36;
}

salarioliquido = salarioBase - valorlIr;

console.log('Salário líquido: ', salarioliquido);