const express = require("express");
const server = express();
const PORT = 8080;

server.use(express.json());

//Base de datos temporal
let plants = [
  { id: 1, name: "Monstera", type: "interior", watered: true },
  { id: 2, name: "Cactus", type: "desert", watered: false },
  { id: 3, name: "Lavanda", type: "exterior", watered: true },
];

//Endpoints
//GET PLANTS
server.get("/plants", (req, res) => {
  return res.status(200).json(plants);
});
//GET PLANT BY ID
server.get("/plants/:id", (req, res) => {
  const id = Number(req.params.id);
  const plant = plants.find((p) => p.id === id);
  if (!plant) {
    return res.status(404).json({ message: "Planta no encontrada" });
  }
  return res.status(200).json(plant);
});
//GET PLANTS BY TYPE
server.get("/plantsfilter", (req, res) => {
  const { type } = req.query;
  const results = plants.filter((p) => p.type === type);
  if (!results.length) {
    return res
      .status(404)
      .json({ message: "No coincide el filtro con ninguna planta" });
  }
  return res.status(200).json(results);
});
//CREATE PLANT
server.post("/plants", (req, res) => {
  const newPlant = {
    id: plants.length + 1,
    name: req.body.name,
    type: req.body.type,
    watered: req.body.watered,
  };

  plants.push(newPlant);
  return res.status(201).json(newPlant);
});
//EDITAR UNA PLANTA
server.put("/plants/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = plants.findIndex((p) => p.id === id);

  if (index === -1) {
    return res
      .status(404)
      .json({ message: "La planta a editar no se ha encontrado" });
  }

  plants[index] = {
    id: id,
    name: req.body.name,
    type: req.body.type,
    watered: req.body.watered,
  };

  return res.status(200).json(plants[index]);
});
//DELETE PLANT
server.delete("/plants/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = plants.findIndex((p) => p.id === id);

  if (index === -1) {
    return res
      .status(404)
      .json({ message: "La planta a borrar no se ha encontrado" });
  }

  plants.splice(index, 1);

  return res.status(200).json(plants);
});

//ENDPOINT PARA RUTAS NO ENCONTRADAS
server.use((req, res) => {
  return res.status(404).json({ message: "Ruta no encontrada" });
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
