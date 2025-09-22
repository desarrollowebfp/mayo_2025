const movies = [
  {
    poster: "https://storage.googleapis.com/pod_public/750/105083.jpg",
    title: "The Matrix",
    year: 1999,
    inTheaters: false,
    director: "The Wachowskis",
  },
  {
    poster:
      "https://m.media-amazon.com/images/I/714Mwnmg2mL._UF894,1000_QL80_.jpg",
    title: "Inception",
    year: 2010,
    inTheaters: false,
    director: "Christopher Nolan",
  },
  {
    poster:
      "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    title: "Interstellar",
    year: 2014,
    inTheaters: false,
    director: "Christopher Nolan",
  },
  {
    poster:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/250px-Oppenheimer_%28film%29.jpg",
    title: "Oppenheimer",
    year: 2023,
    inTheaters: true,
    director: "Christopher Nolan",
  },
  {
    poster:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Dune_Part_Two_poster.jpeg/250px-Dune_Part_Two_poster.jpeg",
    title: "Dune: Part Two",
    year: 2024,
    inTheaters: true,
    director: "Denis Villeneuve",
  },
  {
    poster:
      "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
    title: "The Dark Knight",
    year: 2008,
    inTheaters: false,
    director: "Christopher Nolan",
  },
  {
    poster:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
    title: "Pulp Fiction",
    year: 1994,
    inTheaters: false,
    director: "Quentin Tarantino",
  },
  {
    poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
    title: "The Godfather",
    year: 1972,
    inTheaters: false,
    director: "Francis Ford Coppola",
  },
  {
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    title: "The Shawshank Redemption",
    year: 1994,
    inTheaters: false,
    director: "Frank Darabont",
  },
];

//Recupero el contenedor donde pintaré las películas
const movieContainer = document.querySelector("#movie_container");

//Recorremos todas las películas para realizar una tarea por cada una de ellas
/* for (const movie of movies) {
  //Creamos un li nuevo por película
  const li = document.createElement("li");
  if (movie.inTheaters) {
    li.className = "inTheatre";
  }
  //Creamos una imagen
  const img = document.createElement("img");
  img.src = movie.poster;
  img.alt = movie.title + " poster";
  //Creamos el titulo
  const h2 = document.createElement("h2");
  h2.textContent = movie.title;
  
  //Ahora montamos el li
  li.appendChild(img);
  li.appendChild(h2);

  //Metemos los li's montados en el contenedor
  movieContainer.appendChild(li)
} */

for (const movie of movies) {
  //Creamos un li nuevo por película
  const li = document.createElement("li");
  if (movie.inTheaters) {
    li.className = "inTheatre";
  }
  //Modificamos el innerHTML de cada uno de los lis con template string
  li.innerHTML = `
  <img src="${movie.poster}" alt="${movie.title}"/>
  <h2>${movie.title}</h2>
  `;

  //Metemos los li's montados en el contenedor
  movieContainer.appendChild(li);
}

const firstName = "Antonio";
const perro = "Byron";

const frase = "Mi nombre es " + firstName + " y tengo un perro llamado " + perro;
const frase2 = `Mi nombre 
es ${firstName} 
y tengo un perro 
llamado ${perro}`;
console.log(frase2)