const movies = [
  "The Matrix",
  "Dune",
  "The Batman",
  "The Evil Dead",
  "The Thing",
  "Star Wars",
];

//SLICE -> NO MODIFICA EL ARRAY
const resultadoDeSlice = movies.slice(0);
console.log(resultadoDeSlice);

//SPLICE -> SI MODIFICA EL ARRAY
movies.splice(1, 3, "Cure", "Insidious");
console.log(movies);

//INDEXOF -> BUSCA LA POSICION DE ELEMENTO COINCIDENTE
console.log(movies.indexOf("kjzxnckdfbh"));

//SORT -> ORDENA ALFABETICAMENTE EL ARRAY
movies.sort();
console.log(movies);

const numbers = [0, 1, 4, 12, 87, 6, 8, 14, 20, 64];
numbers.sort((a, b) => a - b);
console.log(numbers);

//EJEMPLO
/* console.log(movies)
const position = movies.indexOf("Star Wars");
console.log(position)
movies.splice(position, 1);
console.log(movies) */

movies.splice(movies.indexOf("Star Wars"), 1);
console.log(movies)