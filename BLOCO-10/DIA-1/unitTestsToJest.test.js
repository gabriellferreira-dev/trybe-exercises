const { functions } = require('./unitTestsToJest');
const { jsons } = require('./unitTestsToJest');

describe('Exercício 1 - testando a soma', () => {
  test('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(functions.sum(4, 5)).toBe(9);
  });
  test('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(functions.sum(0, 0)).toBe(0);
  });
  test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => functions.sum(4, '5')).toThrow(Error);
  });
  test('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => functions.sum(4, '5')).toThrowError('parameters must be numbers');
  });
});

describe('Exercício 2 - verificando array que retorna uma cópia com item removido', () => {
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(functions.myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(functions.myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    const array = [1, 2, 3, 4];
    expect(functions.myRemove(array, 3).length).not.toEqual(array.length);
  });
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    const array = [1, 2, 3, 4];
    expect(functions.myRemove([1, 2, 3, 4], 5)).toEqual(array);
  });
});

describe('Exercício 3 - verificando array que retorna ele mesmo com item removido', () => {
  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(functions.myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(functions.myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    expect(functions.myRemoveWithoutCopy([1, 2, 3, 4], 10)).toEqual([1, 2, 3, 4]);
  });
  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(functions.myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Exercício 4 - verificando a função fizzbuzz', () => {
  test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(functions.myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(functions.myFizzBuzz(9)).toBe('fizz');
  });
  test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(functions.myFizzBuzz(10)).toBe('buzz');
  });
  test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(functions.myFizzBuzz(11)).toBe(11);
  });
  test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(functions.myFizzBuzz('11')).toBe(false);
  });
});

describe('Exercício 5 - comparando jsons', () => {
  const { obj1, obj2, obj3 } = jsons;
  test('Comparando OBJ 1 & 2', () => {
    expect(obj1).toEqual(obj2);
  });
  test('Comparando OBJ 1 & 3', () => {
    expect(obj1).not.toEqual(obj3);
  });
  test('Comparando OBJ 2 & 3', () => {
    expect(obj1).not.toEqual(obj3);
  });
});