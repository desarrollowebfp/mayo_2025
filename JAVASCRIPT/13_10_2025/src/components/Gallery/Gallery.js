import "./Gallery.css";
import products from "../../data/products";
import textoEstrellas from "../../utils/stars";
import conversor from "../../utils/conversor";
import capitalize from "../../utils/capitalize";

const Gallery = () => {
  const main = document.querySelector("main");
  const ul = document.createElement("ul");

  for (const product of products) {
    const li = document.createElement("li");
    li.innerHTML = `
        <img src="${product.image}" alt="${product.title}"/>
        <h2>${product.title}</h2>
        <p class="description">${capitalize(product.description)}</p>
        <p>${textoEstrellas(product.rating.rate)}</p>
        <p>${conversor(product.price)}€</p>
    `;
    ul.appendChild(li);
  }
  main.appendChild(ul);
};

export default Gallery;
