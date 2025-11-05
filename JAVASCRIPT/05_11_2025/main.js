const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
  }
});

//LocalStorage tiene los siguientes metodos
/* localStorage.getItem("theme");
localStorage.setItem("theme", "dark");
localStorage.clear();
localStorage.removeItem("theme"); */

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme")) {
    document.body.className = "dark";
  }
});
