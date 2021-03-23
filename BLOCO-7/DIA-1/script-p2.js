// Exercício 01 sem recursividade
function factorial(value) {
	let fact = 1;
	if (value === 0) {
		return 1;
	}
	for (let i = 2; i <= value; i += 1) {
		fact *= i;
	}
	return fact;
}

console.log(factorial(1));