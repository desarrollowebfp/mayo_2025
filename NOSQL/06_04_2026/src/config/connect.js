//Importamos mongoose para utilizar su método de conexión
const mongoose = require("mongoose");

//Definimos una función de conexión con mongo

//Adicionalmente si queremos controlar un tiempo máximo de conexión le podemos añadir un objeto de opciones y darle en milisegundos el limite a la propiedad serverSelectionTimeoutMS
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/vinyldb", {
      serverSelectionTimeoutMS: 7000,
    });
    console.log("🛜  Conectado con la base de datos de MongoDB");
  } catch (error) {
    console.error(
      "❌ Error conectando con la base de datos de MongoDB",
      error.message,
    );
  }
};

module.exports = connectDB;
