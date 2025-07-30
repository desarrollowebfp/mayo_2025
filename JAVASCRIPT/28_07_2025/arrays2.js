const movies = ["Jurassic Park", "The Evil Dead", "Star Wars"];
//METODOS

//PUSH -> Inserta uno o varios elementos al final
movies.push("The Batman", "Ghost");
console.log(movies);
//POP -> Borra el ultimo elemento
movies.pop();
console.log(movies);
//UNSHIFT -> Inserta uno o varios elementos al principio
movies.unshift("El Exorcista");
console.log(movies);
//SHIFT -> Borra el primer elemento
movies.shift();
console.log(movies);
//REVERSE -> Le da la vuelta al array
movies.reverse();
console.log(movies);
//CONCAT -> Juntar un array con otro asignando las posiciones correspondientes
const primerArray = ["A", "B", "C"];
const segundoArray = ["D", "E", "F"];
const nuevoArray = primerArray.concat(segundoArray);
//const nuevoArrayES6 = [...primerArray, ...segundoArray]
console.log(nuevoArray);
const string = "Hola";
console.log(string[0]);
console.log(string.length);
