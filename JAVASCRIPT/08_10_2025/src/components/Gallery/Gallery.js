import "./Gallery.css";
import cars from "../../data/cars";

const Gallery = () => {
  const main = document.querySelector("main");
  const ul = document.createElement("ul");
  for (const car of cars) {
    const li = document.createElement("li");
    li.innerHTML = `
        <img src="${car.image}" alt="${car.model}"/>
        <div>
            <h2>${car.model}</h2>
            <h3>${car.price_eur.toLocaleString("es-ES")} €</h3>
        </div>
        <p>${car.name} - ${car.weight_tons * 1000} kg</p>
        `;
    ul.appendChild(li);
  }
  main.appendChild(ul);
};

export default Gallery;
