//OPERADORES ARITMETICOS
//OPERADORES + - / * %
//OPERADORES DE ASIGNACION += -= *= /=
let total = 0;

//total = total + 5;
total += 5;
total -= 2;
total *= 2;
total /= 2;

console.log(total);

//OPERADOR RESTO %
const x = 4;
console.log(x % 2);

//MATH
console.log(Math.round(7.6));

//OPERADORES LÓGICOS
const hacerDeberes = true;
const limpiarHabitacion = false;

//&& -> AND -> Y
console.log(hacerDeberes && limpiarHabitacion);
//|| -> OR -> O
console.log(hacerDeberes || limpiarHabitacion);
//! -> NOT -> NO
console.log(hacerDeberes && !limpiarHabitacion);
console.log(!true);

//EXTRA
const y = 6 + 5 * 2;
console.log(y);

//OPERADORES DE COMPARACION
// > -> MAYOR QUE
// >= ->MAYOR E IGUAL QUE
// < -> MENOR QUE
// <= -> MENOR E IGUAL QUE
console.log(18 >= 18);

//!= -> DESIGUAL
console.log(true != false);
//== IGUAL QUE
console.log("Igual que", 2 == "2");
//=== ESTRICTAMENTE IGUAL
console.log("Estrictamente igual", 2 === "2");
