// 1

// const personalData = (name, lastName) => ({
//   fullName: `${name} ${lastName}`,
//   email: `${name.toLowerCase()}${lastName.toLowerCase()}@trybe.com`,
// });

// const newEmployees = (func) => {
//   const employees = {
//     id1: func('Pedro', 'Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
//     id2: func('Luiza', 'Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
//     id3: func('Carla', 'Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
//   }
//   return employees;
// };

// console.log(newEmployees(personalData).id1.email);

// 2

// const checkDraw = (numberDrawn, numberPlayed) => {
//   if (numberPlayed === numberDrawn) {
//     return 'Parabéns você ganhou';
//   }
//   return 'Tente novamente';
// };

// const drawResult = (numPlayed, func) => {
//   const number = Math.round(Math.random() * 5);
//   return func(number, numPlayed);
// };

// console.log(drawResult(3, checkDraw));

// 3

// const correctAnswer = 'higher order function';
// const userAnswer = 'HIGHER ORDER FUNCTION';

// const checkAnswer = (rightAnswer) => (answered) => {
//   if (rightAnswer === answered) {
//     return true;
//   }
//   return false;
// };

// console.log(checkAnswer(correctAnswer)(userAnswer));

// 4

// Realizado com ajuda da solução do tryber Maurício Viegas.

const rightAnswers = ['B', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswer = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) return 1;
  if (studentAnswer === 'N.A') return 0;
  return -0.5;
}

const scoreTotal = (rightAnswers, studentAnswers, checkAnswer) => {
  let score = 0;
  studentAnswers.forEach((answer, index) => {
    score += checkAnswer(rightAnswers[index], answer);
  });
  return score;
};

console.log(scoreTotal(rightAnswers, studentAnswers, checkAnswer));