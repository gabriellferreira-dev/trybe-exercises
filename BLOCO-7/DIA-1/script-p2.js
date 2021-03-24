// Exercício 01 sem recursividade
// function factorial(value) {
// 	let fact = 1;
// 	if (value === 0) {
// 		return 1;
// 	}
// 	for (let i = 2; i <= value; i += 1) {
// 		fact *= i;
// 	}
// 	return fact;
// }

// console.log(factorial(1));

// Exercício 01 recursivo

const factorial = (value) => value === 0 ? 1 : value * factorial(value - 1);

console.log(factorial(5));

// Exercício 02

const highestWord = (sValue) => {
	let words = sValue.split(' ');
	let	highest = '';
	let word1 = words[0];
	for (let i = 1; i < words.length; i += 1) {
		let word2 = words[i];
		highest = word1.length > word2.length ? word1 : word2;
		word1 = highest;
	}
	return highest;
};

console.log(highestWord('Maravilhosa graça, seu amor que não falha!'));