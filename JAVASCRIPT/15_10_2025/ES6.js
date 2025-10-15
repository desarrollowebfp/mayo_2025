//Literal strings - Backticks - Comillas francesas
const name = "Peter";
console.log("Hola " + name + "!");
console.log(`Hola ${name}!`);

//Destructuring
//Arrays
const planetas = ["Marte", "Jupiter", "Saturno", "Venus"];
/* const primerPlaneta = planetas[0];
const segundoPlaneta = planetas[1];
const tercerPlaneta = planetas[2];
const cuartoPlaneta = planetas[3]; */

const [primerPlaneta, segundoPlaneta, tercerPlaneta, cuartoPlaneta] = planetas;
console.log(segundoPlaneta);
//Objetos
const personaje = {
  nombre: "Luke",
  apellido: "Skywalker",
  planeta: "Tatooine",
};

/* const nombre = personaje.nombre;
const apellido = personaje.apellido;
const planeta = personaje.planeta; */
const { nombre, apellido, planeta } = personaje;

//Destructuring anidado
const usuario = {
  info: {
    nombre: "Alicia",
    direccion: { ciudad: "Paris", pais: "Francia" },
  },
};

const {
  info: {
    nombreUsuario,
    direccion: { ciudad },
  },
} = usuario;

//Intercambio de valores o variables
let x = 10;
let y = 20;
[x, y] = [y, x];
console.log(x, y);

//Spread operator
const avengers = ["Iron Man", "Thor"];
const nuevosVengadores = [...avengers, "Capitan America"];

//Sustituyendo al push
let numeros = [];
numeros = [...numeros, 1];
numeros = [...numeros, 2];
numeros = [...numeros, 3, 4, 5, 6];
console.log(numeros);

const palabra = [..."Spread Operator"];
console.log(palabra);

//Ejemplo con objetos
const batman = {
  nombre: "Bruce",
  apellido: "Wayne",
  ciudad: "Gotham",
};

const batmanActualizado = {
  ...batman,
  coche: "Batmovil",
};

console.log(batmanActualizado);

//Dato de chupito
console.log([..."👨‍💻"]);
console.log([..."🧑🏽‍🚀"]);
console.log([..."🧑‍🍼"]);
