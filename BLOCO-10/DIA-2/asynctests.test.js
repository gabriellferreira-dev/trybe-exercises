const { uppercase, getUserName } = require('./asynctests');

describe('Exercício 1 - Verificando a chamada da callback', () => {
  it('should return an uppercase string', (done) => {
    const callback = (str) => {
      expect(str).toBe(str.toUpperCase());
    };
    uppercase('abelha', callback)
    done();
  });
});

describe('Exercício 2 - Verificando o resultado da função getUserName com Promises', () => {
  it('should return the username, if any', () => {
    expect.assertions(1);
    return getUserName(4).then((user) => {
      expect(user).toEqual('Mark');
    });
  });
});

describe('Exercício 3 - Verificando o resultado da função getUserName com async/await', () => {
  it('should return the username, if any', async () => {
    const id = 4;
    try {
      await getUserName(id);
    } catch(error) {
      expect(error).toEqual({ error: 'User with ' + id + ' not found.' });
    }
  });
});