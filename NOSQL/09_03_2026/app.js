//Importamos el módulo http de NodeJS
const http = require("http");

//Vamos a crear un servidor
//req -> petición -> lo que el cliente está pidiendo
//res -> respuesta -> la contestación del servidor
const server = http.createServer((req, res) => {
  //Vamos a definir una respuesta paso a paso
  //Definimos el código de estado de la respuesta -> 200 = OK!
  res.statusCode = 200;
  //Definimos las cabeceras de la respuesta
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  //Vamos a recuperar la información de la petición para exponer como está funcionando desde el navegador
  const texto = [
    `Método: ${req.method}`,
    `URL: ${req.url}`,
    `User-Agent: ${req.headers[`user-agent`]}`,
  ].join("\n");
  //Definimos el contenido de la respuesta
  res.end(texto);
});

//Vamos a escuchar al servidor en el puerto que queramos
server.listen(8080, () => {
  console.log("Servidor escuchando en http://localhost:8080");
});
