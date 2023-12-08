
const express = require('express');
const router = express.Router();
const productosControllers = require('../controllers/productosControllers');


router.get('/shop', productosControllers.mostrarTienda);

module.exports = router;
