const express = require('express');
const router = express.Router();

// Controlador para la página principal de la tienda
const indexController = (req, res) => {
    res.render('shop/index', { pageTitle: 'Página de productos' });
};

// Ruta para la página principal de la tienda
router.get('/index', indexController);

module.exports = router;
