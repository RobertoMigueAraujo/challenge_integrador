const express = require('express');
const router = express.Router();

// Corrige la ruta de require para el archivo de productos
const productos = require('../models/productos'); 

router.get('/', (req, res) => {
    console.log(productos); // Imprime la variable productos en la consola
    res.render('shop', { productos: productos });
});

module.exports = router;


