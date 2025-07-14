//let y const
let dog;
dog = "Byron"; //Operador de asignacion =

dog = "Hades"; //Reasignar un valor

// No se puede declarar una variable con el mismo nombre
const secondDog = "Darko";
//secondDog = "Dana"; No se puede reasignar valor en un const

console.log(dog);
console.log(secondDog);

//SCOPE
//SCOPE GLOBAL
const x = 10;

if (true) {
  //SCOPE LOCAL
  const y = 2;
}

console.log(y);

console.log(x);
