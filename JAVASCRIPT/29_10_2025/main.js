//Es buena práctica ocultar estas claves de API en un .env
const API_KEY = "69902c6c30a342d6b7e163258241906";

const main = document.querySelector("main");
const myInput = document.querySelector("#myInput");
const myBtn = document.querySelector("#myBtn");

const getWeather = async (city) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
  );
  const data = await res.json();
  renderWeather(data);
};

const renderWeather = (data) => {
  main.innerHTML = `
   <h2>${data.location.name} - ${data.location.country}</h2>
   <img src="${data.current.condition.icon}" alt="${data.current.condition.text}"/>
   <h3>${data.current.temp_c}º</h3>
   <h4>Wind: ${data.current.wind_kph} kph</h4>
   `;
};

myBtn.addEventListener("click", () => {
  getWeather(myInput.value);
  myInput.value = "";
});

//getWeather("Madrid");

navigator.geolocation.getCurrentPosition((pos) => {
  const location = `${pos.coords.latitude},${pos.coords.longitude}`;
  getWeather(location);
});
