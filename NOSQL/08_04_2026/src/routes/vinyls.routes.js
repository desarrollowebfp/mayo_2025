const express = require("express");
const {
  getVinyls,
  getVinylByID,
  createVinyl,
  deleteVinyl,
  updateVinyl,
  getVinylsInStock,
  getSortedVinyls,
} = require("../controllers/vinyls.controllers");

//Creamos el router
const router = express.Router();

//Creamos las rutas
router.get("/", getVinyls);
router.get("/:id", getVinylByID);
router.get("/instock/get", getVinylsInStock);
router.get("/order/:order", getSortedVinyls);
router.post("/", createVinyl);
router.delete("/:id", deleteVinyl);
router.put("/:id", updateVinyl);

module.exports = router;
