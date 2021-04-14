// 1 --------------------------

// const assert = require('assert');

// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
// ];

// function flatten() {
//   let array = arrays.reduce((previous, item) => previous.concat(item), []);
//   return array;
// }

// console.log(flatten());

// assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// 2 ------------------------------------------

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// function allNames() {
//   const namesConcat = books.reduce((a, {author: {name}}) => a !== '' ? `${a}, ${name}` : name, '');
//   return `Nomes: ${namesConcat}.`;
// }

// console.log(allNames())

// assert.deepStrictEqual(allNames(), 'Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.');

// 3 --------------------------------

// const expectedResult = 43;

// function averageAge() {
//   return books.reduce((acc, {author: {birthYear}}, i) => acc + (books[i].releaseYear - birthYear), 0) / books.length;
// }

// console.log(averageAge())

// assert.strictEqual(averageAge(), expectedResult);

// 4 -------------------------------------

// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

// function longestNamedBook() {
//   return books.reduce((acc, book) =>
//     acc.name.length > book.name.length ? acc : book
//   );
// }

// console.log(longestNamedBook());

// assert.deepStrictEqual(longestNamedBook(), expectedResult);

// 5 --------------------------------

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  let count = 0;
  const countLetters = names.forEach((name) => {
    count += name.split('').filter((letter) => letter === 'a' || letter === 'A').length;
  });
  return count;
}

assert.deepStrictEqual(containsA(), 20);