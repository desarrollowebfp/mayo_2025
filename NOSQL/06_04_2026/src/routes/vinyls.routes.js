const express = require("express");
const {
  getVinyls,
  getVinylByID,
  createVinyl,
  deleteVinyl,
  updateVinyl,
} = require("../controllers/vinyls.controllers");

//Creamos el router
const router = express.Router();

//Creamos las rutas
router.get("/", getVinyls);
router.get("/:id", getVinylByID);
router.post("/", createVinyl);
router.delete("/:id", deleteVinyl);
router.put("/:id", updateVinyl);

module.exports = router;
