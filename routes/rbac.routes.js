const express = require('express');
const router = express.Router();

const controladores = require('../controllers/rbac.controller');

router.get("/", controladores.get_comienzo);
router.get("/registro", controladores.get_registro);
router.post("/registro", controladores.post_registro);
router.get("/inicia", controladores.get_inicia);
router.post("/inicia", controladores.post_inicia);
router.get("/cierra", controladores.get_cierra)

module.exports = router;