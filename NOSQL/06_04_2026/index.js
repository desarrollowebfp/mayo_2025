//Importamos express
const express = require("express");
//Importamos la función de conexión con MongoDB
const connectDB = require("./src/config/connect");
//Importamos el router de los vinilos
const vinylsRouter = require("./src/routes/vinyls.routes");

//Creamos el servidor
const server = express();
//Le indicamos que vamos a tratar con datos json
server.use(express.json());
//Nos conectamos con MongoDB
connectDB();

//Definimos el puerto
const PORT = 8080;

//-------RUTAS--------
server.use("/api/vinyls", vinylsRouter);

//Ruta no encontrada
server.use((req, res) => {
  return res.status(404).json({ error: "Route not found" });
});

//Levantamos el servidor
server.listen(PORT, () => {
  console.log(`✅ Servidor levantado en http://localhost:${PORT}`);
});
