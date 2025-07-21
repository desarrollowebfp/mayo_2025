const age = 36;

if (age > 0 && age < 18) {
  console.log("No puedes pasar al concierto");
} else if (age >= 18 && age < 35) {
  console.log("Puedes pasar al concierto");
} else if (age >= 35 && age <= 90) {
  console.log("Puedes pasar a la zona de adultos");
} else if (age > 90 && age <= 140) {
  console.log("Puedes pasar pero ten cuidado");
} else {
  console.log("No eres un ser humano, no puedes pasar");
}

//
//0-4 INSUFICIENTE
//5-6 SUFICIENTE
//7-8 NOTABLE
//9-10 SOBRESALIENTE

const nota = 0;

if (nota >= 0 && nota < 5) {
  console.log("INSUFICIENTE");
} else if (nota >= 5 && nota < 7) {
  console.log("SUFICIENTE");
} else if (nota >= 7 && nota < 9) {
  console.log("NOTABLE");
} else if (nota > 9 && nota <= 10) {
  console.log("SOBRESALIENTE");
} else {
  console.log("NO PRESENTADO / FALLO SISTEMA");
}

//SWITCH

switch (nota) {
  case 0:
    console.log("INSUFICIENTE");
    break;
  case 1:
    console.log("INSUFICIENTE");
    break;
  case 2:
    console.log("INSUFICIENTE");
    break;
  case 3:
    console.log("INSUFICIENTE");
    break;
  case 4:
    console.log("INSUFICIENTE");
    break;
  case 5:
    console.log("SUFICIENTE");
    break;
  case 6:
    console.log("SUFICIENTE");
    break;
  case 7:
    console.log("NOTABLE");
    break;
  case 8:
    console.log("NOTABLE");
    break;
  case 9:
    console.log("SOBRESALIENTE");
    break;
  case 10:
    console.log("SOBRESALIENTE");
    break;
  default:
    console.log("NO PRESENTADO / FALLO SISTEMA");
    break;
}

//TERNARIO
const registrado = true;

if (registrado) {
  console.log("Puedes entrar en la app");
} else {
  console.log("No puedes entrar en la app");
}

registrado
  ? console.log("Puedes entrar en la app")
  : console.log("No puedes entrar en la app");
