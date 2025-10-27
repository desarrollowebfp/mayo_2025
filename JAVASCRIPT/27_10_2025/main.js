const API_URL_BASE = "https://rickandmortyapi.com/api/character";
const characters_container = document.querySelector("#characters_container");

/* fetch(API_URL_BASE)
  .then((res) => res.json())
  .then((data) => console.log(data));
 */

//Creamos una variable que empieza siendo 1
let page = 1;
//Para crear una función asincrona hay que indicar async en la declaración
const getCharacters = async () => {
  //Con await esperamos al resultado del fetch y su almacenamiento en res
  const res = await fetch(API_URL_BASE + "?page=" + page);
  //Con await esperamos a la conversion del rest y su almacenamiento en data
  const data = await res.json();
  //Aqui la asincronía ya está resuelta y puedo tratar data como datos normales
  renderCharacters(data.results);
};

const renderCharacters = (characters) => {
  for (const character of characters) {
    const li = document.createElement("li");
    li.innerHTML = `
            <h2>${character.name}</h2>
            <img src="${character.image}" alt="${character.name}"/>
            <p>${character.status}</p>
            <p>${character.origin.name} - ${character.location.name}</p>
        `;
    li.className = character.status.toLowerCase();
    characters_container.appendChild(li);
  }
};

//Lanzamos por defecto al arrancar la aplicación por primera vez el getCharacters
getCharacters();


//Añadimos un evento scroll a la ventana
window.addEventListener("scroll", () => {
    const alturaTotal = document.documentElement.scrollHeight;
    const posicionActual = window.scrollY + window.innerHeight;
    //Antes de llegar al fondo de la pagina haciendo scroll (por 20 pixeles más o menos)
    if(posicionActual >= alturaTotal - 30){
        //Le sumamos un 1 a la variable pagina
        page += 1
        //Volvemos a llamar a los personajes
        getCharacters();
    }
})

console.log(document)