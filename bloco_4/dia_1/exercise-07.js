// 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.

let porcentagem = parseInt(prompt('Informe a porcentagem da nota: '));

if (porcentagem >= 90 && porcentagem <= 100) {
  console.log('A');
} else if (porcentagem >= 80 && porcentagem <= 100) {
  console.log('B');
} else if (porcentagem >= 70 && porcentagem <= 100) {
  console.log('C');
} else if (porcentagem >= 60 && porcentagem <= 100) {
  console.log('D');
} else if (porcentagem >= 50 && porcentagem <= 100) {
  console.log('E');
} else if (porcentagem < 50 && porcentagem >= 0) {
  console.log('F');
} else if (porcentagem < 0 || porcentagem > 100) {
  console.log('Nota inválida! Informe um valor maior ou igual a 0 e menor ou igual a 100.');
}
