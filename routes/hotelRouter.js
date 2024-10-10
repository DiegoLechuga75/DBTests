const express = require("express");
const mostrarHoteles = require("../controllers/hotel/hotelController");

const router = express.Router();

router.get("/mostrarHotel", mostrarHoteles);

module.exports = router;