const testingScope = (escopo) => {
	if (escopo === true) {
		var isEscope = 'Não devo ser utilizada fora do meu escopo (if)';
		isEscope = `${isEscope}. Ótimo, fui utilizada no escopo !`;
		console.log(isEscope);
	} else {
		var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
		console.log(elseScope);
	}
	console.log(`${isEscope}. O que estou fazendo aqui ? :O`);
};

testingScope(false);