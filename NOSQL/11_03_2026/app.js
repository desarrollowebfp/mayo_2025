//Importamos el modulo http
const http = require("http");

//Creamos una función que manipule la petición
const requestHandler = (req, res) => {
  if (req.url === "/hello") {
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8",
    });
    res.end("Hola, soy la respuesta del servidor");
    return;
  }

  if (req.url === "/paises") {
    const data = [
      {
        ciudad: "Madrid",
        pais: "España",
        poblacion_aprox: 3300000,
      },
      {
        ciudad: "París",
        pais: "Francia",
        poblacion_aprox: 2100000,
      },
    ];

    res.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
    });
    res.end(JSON.stringify(data));
    return;
  }

  res.writeHead(404, {
    "Content-Type": "text/plain; charset=utf-8",
  });
  res.end("Route not found");
};

//Definimos el puerto en una variable de entorno
const PORT = 8080;

//Creamos el servidor y le pasamos como manipulador de las peticiones nuestra función requestHandler
const server = http.createServer(requestHandler);

//Escuchamos el servidor
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
