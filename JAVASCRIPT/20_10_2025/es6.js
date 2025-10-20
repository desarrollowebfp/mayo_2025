//MAP -> Te devuelve un array en base a una función aplicada

const characters = [
  { name: "Frodo", race: "Hobbit", age: 50 },
  { name: "Legolas", race: "Elf", age: 2931 },
  { name: "Gimli", race: "Dwarf", age: 140 },
  { name: "Sam", race: "Hobbit", age: 38 },
];

const names = characters.map((character) => character.name);
console.log(names);

//

const precios = [2.5, 5.6, 10.4, 4];
const preciosConIva = precios.map((precio) => precio * 1.21);
console.log(preciosConIva);

//

const customCharacters = characters.map((character) => ({
  nombre: character.name,
  raza: character.race,
  esAnciano: character.age > 100,
}));

console.log(customCharacters);

//FILTER -> En base a una condicion te devuelve un array con los coincidentes
const hobbits = characters.filter((character) => character.race === "Hobbit");
console.log(hobbits);

const hobbitsMayoresDe45 = characters.filter(
  (character) => character.race === "Hobbit" && character.age > 45
);
console.log(hobbitsMayoresDe45);

//FIND -> Te devuelve el primer elemento coincidente con la condicion
const frodo = characters.find((character) => character.name === "Frodo");
console.log(frodo);

//EVERY
const todosHobbits = characters.every(
  (character) => character.race === "Hobbit"
);
console.log(todosHobbits);
//SOME
const algunosHobbits = characters.some(
  (character) => character.race === "Hobbit"
);
console.log(algunosHobbits);

//REDUCE
const totalEdades = characters.reduce(
  (acc, character) => acc + character.age,
  0
);
console.log(totalEdades);

//EJEMPLO DE HACER UN MAP CON UN REDUCE
/* const characters = [
  { name: "Frodo", race: "Hobbit", age: 50 },
  { name: "Legolas", race: "Elf", age: 2931 },
  { name: "Gimli", race: "Dwarf", age: 140 },
  { name: "Sam", race: "Hobbit", age: 38 },
];

const names = characters.map((character) => character.name); */
const namesConReduce = characters.reduce((acc, character) => {
  acc.push(character.name);
  return acc;
}, []);

console.log(namesConReduce);
