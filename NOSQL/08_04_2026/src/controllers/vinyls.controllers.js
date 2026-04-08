// Importamos el modelo de vinilo para utilizar los métodos de Mongo
const Vinyl = require("../models/vinyl.model");

const getVinyls = async (req, res) => {
  try {
    const vinyls = await Vinyl.find();
    return res.status(200).json(vinyls);
  } catch (error) {
    return res.status(500).json({
      message: "Error obteniendo los vinilos",
      error: error.message,
    });
  }
};

const getVinylByID = async (req, res) => {
  try {
    //http://localhost:8080/api/:id
    const { id } = req.params;
    const vinyl = await Vinyl.findById(id);
    //Vamos a controlar un error específico
    if (!vinyl) {
      return res.status(404).json({ message: "Vinilo no encontrado" });
    }
    return res.status(200).json(vinyl);
  } catch (error) {
    return res.status(500).json({
      message: "Error obteniendo el vinilo",
      error: error.message,
    });
  }
};

const createVinyl = async (req, res) => {
  try {
    const newVinyl = new Vinyl(req.body);
    const savedVinyl = await newVinyl.save();
    return res.status(201).json(savedVinyl);
  } catch (error) {
    return res.status(500).json({
      message: "Error creando el vinilo",
      error: error.message,
    });
  }
};

const deleteVinyl = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedVinyl = await Vinyl.findByIdAndDelete(id);
    if (!deletedVinyl) {
      return res.status(404).json({ message: "Vinilo a borrar no encontrado" });
    }
    return res.status(200).json({ message: "Vinilo borrado correctamente" });
  } catch (error) {
    return res.status(500).json({
      message: "Error borrando el vinilo",
      error: error.message,
    });
  }
};

const updateVinyl = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedVinyl = await Vinyl.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedVinyl) {
      return res
        .status(404)
        .json({ message: "No se encuentra el vinilo a actualizar" });
    }

    return res.status(200).json(updatedVinyl);
  } catch (error) {
    return res.status(500).json({
      message: "Error actualizando el vinilo",
      error: error.message,
    });
  }
};

const getVinylsInStock = async (req, res) => {
  try {
    const vinyls = await Vinyl.find({ stock: true });
    return res.status(200).json(vinyls);
  } catch (error) {
    return res.status(500).json({
      message: "Error obteniendo los vinilos",
      error: error.message,
    });
  }
};

const getSortedVinyls = async (req, res) => {
  const { order } = req.params;
  try {
    if (order === "asc") {
      const vinyls = await Vinyl.find().sort({ title: 1 });
      return res.status(200).json(vinyls);
    } else {
      const vinyls = await Vinyl.find().sort({ title: -1 });
      return res.status(200).json(vinyls);
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error obteniendo los vinilos",
      error: error.message,
    });
  }
};

module.exports = {
  getVinyls,
  getVinylByID,
  createVinyl,
  deleteVinyl,
  updateVinyl,
  getVinylsInStock,
  getSortedVinyls,
};
