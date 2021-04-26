const { uppercase } = require('./asynctests');

describe('Exercício 1 - Verificando a chamada da callback', () => {
  it('should return an uppercase string', (done) => {
    const callback = (str) => {
      expect(str).toBe(str.toUpperCase());
    };
    uppercase('abelha', callback)
    done();
  });
});