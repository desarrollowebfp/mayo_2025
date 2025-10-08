import "./style.css";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

//Es buena práctica lanzar todas las funciones para construir una aplicación web una vez el DOM esté cargado por completo
document.addEventListener("DOMContentLoaded", () => {
  Header();
  Gallery();
  Footer();
});
