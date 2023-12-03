const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Esta es la página principal de la tienda</h1>');
});
router.get('/item/:id', (req, res) => {
    res.send(`Esta es la página del artículo con ID: ${req.params.id}`);
});

router.post('/item/:id/add', (req, res) => {
    res.send(`Artículo con ID: ${req.params.id} añadido al carrito`);
});

router.get('/cart', (req, res) => {
    res.send('Esta es la página del carrito de compras');
});

router.post('/cart', (req, res) => {
    res.send('Compra realizada con éxito');
});

module.exports = router;
