const express = require('express');
const isAuth = require("../util/isAuth");
const router = express.Router();
const permisos = require('../util/permisos');

const controladores = require('../controllers/compras.controller');

router.get("/", isAuth, controladores.get_compras);
router.get("/carrito", isAuth, permisos.realizar_compra, controladores.get_carrito);
router.get("/graficos", isAuth, permisos.consultar_graficos, controladores.get_graficos);

module.exports = router;