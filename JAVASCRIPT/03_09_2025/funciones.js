//Funciones

//1º
//Declarar una funcion
//function + nombre + parametros + bloque de ejecución
function diHola() {
  console.log("Hola");
}

//Ejecutar una función
diHola();

//2º
//Función con parámetros
function diHolaConNombre(nombre) {
  console.log("Hola " + nombre);
}

diHolaConNombre("Javier");
diHolaConNombre("Helena");
diHolaConNombre("Paco");

//3º
//Función con varios parámetros
function sumarDosNumeros(numero1, numero2) {
  const total = numero1 + numero2;
  console.log("El total es: " + total);
}

sumarDosNumeros(5, 8);

//4º
//Función con varios parámetros y uno o más valores por defecto
function calculadoraDeEdad(nombre, anioNacimiento, anioActual = 2025) {
  const edad = anioActual - anioNacimiento;
  console.log(nombre + " tiene " + edad + " años.");
}

calculadoraDeEdad("Antonio", 1990);
calculadoraDeEdad("Antonio", 1990, 2001);

//5º
//Función con retorno
function arrayNumericoX2(array) {
  const listaX2 = [];
  for (const element of array) {
    listaX2.push(element * 2);
  }
  return listaX2
}

const lista1 = [1, 2, 3, 4, 5, 6];
const lista2 = [20, 40, 60, 80];

const lista1X2 = arrayNumericoX2(lista1)
console.log(lista1X2)