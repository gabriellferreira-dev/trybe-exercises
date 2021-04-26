const { uppercase, getUserName, getRepos } = require('./asynctests');

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
    } catch(error) {
      expect(error).toEqual({ error: 'User with ' + id + ' not found.' });
    }
  });
});

describe('Exercício 4 - Verificando se lista contém respectivos repositórios', () => {  
  it('must return true if it finds the repository', async () => {
    try {
      const listRepository = await getRepos('https://api.github.com/orgs/tryber/repos');
      const reposToFind = ['sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-meme-generator'];
      reposToFind.forEach((repo) => {
        const repos = listRepository.find((repository) => repo === repository);
        expect(repos).toEqual(repo);
      })
    } catch (err) {
      return Promise.reject(err);
    }
  });
})
