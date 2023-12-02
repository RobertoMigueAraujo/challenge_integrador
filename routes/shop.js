const express = require('express');
const router = express.Router();

// Ruta para la página principal de la tienda
router.get('/', (req, res) => {
    res.send('Esta es la página principal de la tienda');
});

// Ruta para la página de un artículo específico
router.get('/item/:id', (req, res) => {
    res.send(`Esta es la página del artículo con ID: ${req.params.id}`);
});

// Ruta para agregar un artículo al carrito
router.post('/item/:id/add', (req, res) => {
    res.send(`Artículo con ID: ${req.params.id} añadido al carrito`);
});

// Ruta para la página del carrito de compras
router.get('/cart', (req, res) => {
    res.send('Esta es la página del carrito de compras');
});

// Ruta para realizar una compra
router.post('/cart', (req, res) => {
    res.send('Compra realizada con éxito');
});

module.exports = router;
