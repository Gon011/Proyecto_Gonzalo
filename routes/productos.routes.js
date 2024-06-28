const express = require('express');
const isAuth = require("../util/isAuth");
const router = express.Router();

const controladores = require('../controllers/productos.controller');

router.post("/anadir-producto", isAuth, controladores.post_anadir_producto);
router.get("/anadir-producto", isAuth, controladores.get_anadir_producto);

router.get("/:id", isAuth, controladores.get_producto);
router.get("/", isAuth, controladores.get_productos);

router.post("/:id", isAuth, controladores.post_carrito);

module.exports = router;