/* Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const alumnos = [
  "Fermin",
  "Rafa",
  "Miguel Angel",
  "Ro G",
  "Oscar",
  "Nauzet",
  "Miguel Mario",
];

function findLongestWord(avengers) {
  let longestWord = "";
  for (const string of avengers) {
    if (string.length > longestWord.length) {
      longestWord = string;
    }
  }
  console.log(longestWord);
}

findLongestWord(avengers);
findLongestWord(alumnos);
