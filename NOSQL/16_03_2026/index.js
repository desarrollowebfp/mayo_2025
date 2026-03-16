//=============CONFIGURACION DEL SERVIDOR====================
//Importamos express
const express = require("express");

//Crear el servidor express
const server = express();
server.use(express.json())

//Definimos el puerto donde vamos a levantar el servidor
const PORT = 8080;

//Nuestro array dinámico
let tasks = [
  { id: 1, title: "Estudiar ExpressJS", completed: false },
  { id: 2, title: "Hacer los deberes", completed: true },
  { id: 3, title: "Terminar el proyecto intermodular", completed: false },
];

//=======================RUTAS===============================
//Ruta principal
server.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});
//Buscar tarea por id
server.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }

  return res.status(200).json(task);
});

//Creamos una nueva tarea
server.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: req.body.completed,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

//Escuchamos al servidor
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
