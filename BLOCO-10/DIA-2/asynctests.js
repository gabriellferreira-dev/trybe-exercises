// 1

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

// 2 & 3

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then((user) => user.name);
};

// 4

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

// 6

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  const animal = Animals.find((animal) => animal.name === name);
  if (animal) return animal;
  throw new Error('Nenhum animal com esse nome!')
};

const getAnimal = async (name) => {
  try {
    return findAnimalByName(name);
  } catch (err) {
    throw err.message;
  }
};

const findAnimalByAge = (age) => {
  const animal = Animals.filter((animal) => animal.age === age);
  if (!animal.length) {
    throw new Error('Nenhum animal com a idade encontrado');
  }
  return animal;
}

const getAnimalByAge = async (age) => {
  try {
    return findAnimalByAge(age);
  } catch (err) {
    throw err.message;
  }
}

getAnimalByAge(10);

module.exports = { uppercase, getUserName, getRepos, getAnimal, getAnimalByAge };
