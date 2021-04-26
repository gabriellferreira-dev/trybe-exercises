const { uppercase, getUserName, getRepos, getAnimal } = require('./asynctests');

describe('Exercício 1 - Verificando a chamada da callback', () => {
  it('should return an uppercase string', (done) => {
    const callback = (str) => {
      expect(str).toBe(str.toUpperCase());
    };
    uppercase('abelha', callback);
    done();
  });
});

describe('Exercício 2 - Verificando o resultado da função getUserName com Promises', () => {
  it('should return the username, if any (promise)', () => {
    expect.assertions(1);
    return getUserName(4).then((user) => {
      expect(user).toEqual('Mark');
    });
  });
});

describe('Exercício 3 - Verificando o resultado da função getUserName com async/await', () => {
  it('should return the username, if any (async/await)', async () => {
    const id = 4;
    try {
      await getUserName(id);
    } catch (error) {
      expect(error).toEqual({ error: 'User with ' + id + ' not found.' });
    }
  });
});

describe('Exercício 4 - Verificando se lista contém respectivos repositórios', () => {
  it('must return true if it finds the repository', async () => {
    try {
      const listRepository = await getRepos('https://api.github.com/orgs/tryber/repos');
      const reposToFind = [
        'sd-01-week4-5-project-todo-list',
        'sd-01-week4-5-project-meme-generator',
      ];
      reposToFind.forEach((repo) => {
        const repos = listRepository.find((repository) => repo === repository);
        expect(repos).toEqual(repo);
      });
    } catch (err) {
      return Promise.reject(err);
    }
  });
});

describe('Exercício 5 - Descobrindo a saída no console log', () => {
  beforeEach(() => console.log('1 - beforeEach'));
  afterEach(() => console.log('1 - afterEach'));

  test('', () => console.log('1 - test'));

  /* 
    Primeiro irá aparecer 1 - beforeEach, logo após 1 - test e
    em seguida, 1 - afterEach.
  */
  describe('Scoped / Nested block', () => {
    beforeEach(() => console.log('2 - beforeEach'));
    afterEach(() => console.log('2 - afterEach'));
  
    test('', () => console.log('2 - test'));
  });
});

describe('Exercício 6 - Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

