// 1

const personalData = (name, lastName) => ({
  fullName: `${name} ${lastName}`,
  email: `${name.toLowerCase()}${lastName.toLowerCase()}@trybe.com`,
});

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro', 'Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: func('Luiza', 'Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: func('Carla', 'Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees(personalData).id1.email);

// 2

