import "./Header.css";
import links from "../../data/links";

const Header = () => {
  document.querySelector("header").innerHTML = `
    <h1>Fake Store</h1>
    <nav>
        <ul>
            ${links.map((link) => `
            <li>
                <a href="${link.link}">${link.text}</a>
            </li>`).join("")}
        </ul>
    </nav>
    `;
};

export default Header;
