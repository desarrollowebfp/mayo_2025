//CRUD

//Read and Create -> Leer y Crear
//Crear o recuperar un nodo
const subtitulo = document.querySelector("#subtitulo");
console.log(subtitulo);

const parrafos = document.querySelectorAll(".parrafo");
console.log(parrafos);

//Update -> Actualizar
const h3 = document.querySelector("h3");
h3.textContent = "Ahora soy un h3 con superpoderes";
h3.className = "heading3";

//Delete -> Borrar
h3.remove();

//Crear
const img = document.createElement("img");
img.src =
  "https://images.halloweencostumes.eu/products/74696/1-1/60-inch-light-up-skeleton.jpg";
img.alt = "Esqueleto esperando";
console.log(img);

//Añadir nodos al documento o elementos del documento
//document.body.appendChild(img)

const container = document.querySelector("#container");
container.appendChild(img);

const animales = ["Perro", "Gato", "Ciervo", "Cuervo", "Loro", "Serpiente"];

//Recupero el contenedor de la lista
const containerLista = document.querySelector("#lista");

for (const animal of animales) {
    const li = document.createElement("li");
    li.textContent = animal;
    containerLista.appendChild(li)
}