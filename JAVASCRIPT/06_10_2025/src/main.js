import "./style.css";
import "./buttons.css";
import { animales } from "./data";
import changeTheme from "./utils";

document.querySelector("#myBtn").addEventListener("click", changeTheme);
