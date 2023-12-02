const express = require('express');
const router = express.Router();

// Controlador para la página principal de la tienda
const adminController = (req, res) => {
    res.send('Esta ruta devuelve la vista de productos.');
};

// Ruta para la página principal de la tienda
router.get('/admin', adminController);

module.exports = router;