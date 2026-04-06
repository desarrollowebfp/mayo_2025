//Importamos mongoose para hacer un nuevo Schema de Mongo
const mongoose = require("mongoose");

//Vamos a definir unos enums para utilizar en nuestro modelo
const FORMATO = ["LP", "EP", "Single"];
const RPM = [33, 45, 78];
const ESTADO = ["Nuevo", "Muy bueno", "Usado", "Con leves daños"];

//Definimos el esquema de nuestros discos de vinilo
const vinylSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    artist: { type: String, required: true, trim: true },
    genre: { type: String, required: false, trim: true, default: "Unknown" },
    label: { type: String, required: false, trim: true, default: "Unknown" },
    year: { type: Number, required: true, max: 2300 },
    format: { type: String, enum: FORMATO },
    rpm: { type: Number, enum: RPM },
    condition: { type: String, enum: ESTADO },
    cover: {
      type: String,
      required: false,
      default:
        "https://res.cloudinary.com/dwkafwila/image/upload/v1774891671/vinylplaceholder_taxfym.webp",
      trim: true,
    },
    stock: { type: Boolean, required: false, default: false },
    // Opcionalmente podéis tener propiedades que sean arrays de cualquier tipo indicandolo al principio de la propiedad -> songs: [{ type: String, trim: true }],
  },
  {
    timestamps: true,
    versionKey: false,
    // Opcionalmente podéis obligar a Mongo a llamar a su colección de elementos cuando se creen con -> collection: "vinyls"
  },
);

// Creamos el modelo en base al esquema que hemos configurado
const Vinyl = mongoose.model("Vinyl", vinylSchema);

module.exports = Vinyl;
