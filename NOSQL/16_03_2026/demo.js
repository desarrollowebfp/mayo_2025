//=============CONFIGURACION DEL SERVIDOR====================
//Importamos express
const express = require("express");

//Crear el servidor express
const server = express();

//Definimos el puerto donde vamos a levantar el servidor
const PORT = 8080;

//=======================RUTAS===============================
//Ruta principal
server.get("/", (req, res) => {
  res.end("Servidor Express en funcionamiento.");
});
//Ruta alumnos
server.get("/users/:name", (req, res) => {
  const name = req.params.name;
  const alumnos = ["fermin", "ro", "jose", "ezequiel"];

  if (!alumnos.includes(name)) {
    return res.send("Usuario no encontrado");
  }

  res.send(`El alumno o alumna es: ${name}`);
});
//Ruta productos
server.get("/products/:id", (req, res) => {
  const productID = req.params.id;

  const products = [
    {
      id: 1,
      name: "Coca-Cola",
    },
    {
      id: 2,
      name: "Agua",
    },
    {
      id: 3,
      name: "Monstera",
    },
  ];

  const product = products.find((p) => p.id === Number(productID));

  if (!product) {
    return res.send("Producto no encontrado");
  }

  res.send(`Nombre del producto: ${product.name}`);
});

//QUERY PARAMS
//Ruta de saludo personalizado
server.get("/welcome", (req, res) => {
  const { name, role } = req.query;

  res.send(`El usuario es: ${name} y tiene el rol de ${role}`);
});

//Escuchamos al servidor
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
