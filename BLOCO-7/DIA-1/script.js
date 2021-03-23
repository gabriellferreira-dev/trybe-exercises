function testingScope(escopo) {
	if (escopo === true) {
		var isEscope = 'Não devo ser utilizada fora do meu escopo (if)';
		isEscope = ifEscope + ' ótimo, fui utilizada no escopo !';
		console.log(isEscope);
	} else {
		var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
		console.log(elseScope);
	}
	console.log(ifEscope + ' o que estou fazendo aqui ? :O');
}

testingScope(true);