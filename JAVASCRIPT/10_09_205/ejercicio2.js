/* Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

Pista: puedes generar un nuevo array y devolverlo.

Puedes usar este array para probar tu función: */

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

const duplicates2 = ["a", "a", "b", "a", "c", "b", "c", "a"];

function removeDuplicates(listaDeStrings) {
  const uniques = [];
  for (const element of listaDeStrings) {
    if (!uniques.includes(element)) {
      uniques.push(element);
    }
  }
  console.log(uniques);
}

removeDuplicates(duplicates);
removeDuplicates(duplicates2);
