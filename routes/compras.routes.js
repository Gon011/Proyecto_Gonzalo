const express = require('express');
const isAuth = require("../util/isAuth");
const router = express.Router();

const controladores = require('../controllers/compras.controller');

router.get("/", isAuth, controladores.get_compras);
router.get("/carrito", isAuth, controladores.get_carrito);

module.exports = router;