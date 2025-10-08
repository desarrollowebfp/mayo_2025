import "./Header.css";

const Header = () => {
  const header = document.querySelector("header");
  header.innerHTML = `
    <h1>Canalcar</h1>
    <p>Coches de ocasión</p>
    `;
};

export default Header;