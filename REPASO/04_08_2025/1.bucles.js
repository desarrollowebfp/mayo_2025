for (let i = 0; i < 4; i++) {
  console.log("Hola", i);
}

//ARRANCA EL BUCLE
// i = 0, SE CUMPLE, ME LLEVO UNA -> "Hola 0"
// i = 1, SE CUMPLE, ME LLEVO UNA -> "Hola 1"
// i = 2, SE CUMPLE, ME LLEVO UNA -> "Hola 2"
// i = 3, SE CUMPLE, ME LLEVO UNA -> "Hola 3"
// i = 4, NO SE CUMPLE, SE ROMPE EL BUCLE

const numbers = [5, 8, 2, 4, 9, 1];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  const total = number * 1.2;
  console.log(total);
}
