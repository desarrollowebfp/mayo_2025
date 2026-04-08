// Importamos mongoose porque nos vamos a conectar y desconectar de la base de datos
const mongoose = require("mongoose");
// Importamos el modelo de Vinilos porque vamos a usar métodos de Mongo para hacer la colección y manipularla
const Vinyl = require("../models/vinyl.model");
// Importamos el array de vinilos que vamos a inyectar
const vinyls = require("./data");

// Vamos a convertir nuestros vinilos "normales" en vinilos de MongoDB mediante el modelo
const vinylsDocuments = vinyls.map((vinyl) => new Vinyl(vinyl));

// Vamos a conectarnos con la base de datos
mongoose
  .connect("mongodb://localhost:27017/vinyldb")
  .then(async () => {
    // Intentamos encontrar en nuestra DB si hay algún vinilo
    const allVinyls = await Vinyl.find();
    // Comprobamos que hay vinilos en la DB
    if (allVinyls.length) {
      // Si hay algo en la DB en la colección vinilos, los borramos
      await Vinyl.collection.drop();
      console.log("Colección borrada");
    }
  })
  .catch((error) => {
    console.log(error.message);
  })
  .then(async () => {
    // Como ya hemos comprobado si había o no había vinilos, ahora los insertamos
    await Vinyl.insertMany(vinylsDocuments);
    console.log("Vinilos insertados en la DB exitosamente");
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => mongoose.disconnect()); // Por seguridad, cortamos la conexión con la DB
