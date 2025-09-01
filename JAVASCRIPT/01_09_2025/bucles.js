for (let i = 0; i < 3; i++) {
  console.log("Hola", i);
}

// i = 0 -> SE CUMPLE LA CONDICION -> UNA VEZ TERMINE LA VUELTA LE SUMO 1 -> Hola 0
// i = 1 -> SE CUMPLE LA CONDICION -> UNA VEZ TERMINE LA VUELTA LE SUMO 1 -> Hola 1
// i = 2 -> SE CUMPLE LA CONDICION -> UNA VEZ TERMINE LA VUELTA LE SUMO 1 -> Hola 2
// i = 3 -> NO SE CUMPLE LA CONDICION -> SE ROMPE EL BUCLE

//

const figuras = [
  "Boba Fett",
  "Sam Porter",
  "Metal Gear",
  "Cloud Strife",
  "Jar Jar",
  "Robocop",
  "Godzilla",
];

for (let i = 0; i < figuras.length; i++) {
  const figura = figuras[i];
  console.log(figura, i);
}

//

const numeros = [2, 5, 24, 27, 29, 100, 240, 3];

let total = 0;

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  total += numero;
}

console.log(total);

//OTROS BUCLES
const animales = ["Perro", "Gato", "Loro", "Elefante"];

/* for(let i = 0; i < animales.length; i++){
    const animal = animales[i];
    console.log(animal)
} */

//FOR OF
for (const animal of animales) {
  console.log(animal);
}

//FOR EACH
animales.forEach((animal, i) => {
  console.log(animal, i);
});

//FOR IN -> OBJETOS
const batman = {
  name: "Bruce",
  parents: false,
  city: "Gotham",
  age: 50,
};

for (const propiedad in batman) {
  console.log("La propiedad " + propiedad + " tiene como valor " + batman[propiedad]);
}
