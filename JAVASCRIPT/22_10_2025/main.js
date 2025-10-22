fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((res) => {
    for (const character of res.results) {
      document.body.innerHTML += `
            <h2>${character.name}</h2>
            <img src="${character.image}" alt="${character.name}"/>
            `;
    }
  });
