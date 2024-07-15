const express = require('express');
const isAuth = require("../util/isAuth");
const router = express.Router();
const permisos = require('../util/permisos');

const controladores = require('../controllers/productos.controller');

router.post("/anadir", isAuth, permisos.anadir_producto, controladores.post_anadir_producto);
router.get("/anadir", isAuth, permisos.anadir_producto, controladores.get_anadir_producto);

router.get("/:id", isAuth, controladores.get_producto);
router.get("/", isAuth, controladores.get_productos);

router.post("/:id", isAuth, permisos.realizar_compra, controladores.post_carrito);

module.exports = router;