const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('shop/index', { pageTitle: 'Página principal de la tienda' });
});

router.get('/item/:id', (req, res) => {
    res.render('shop/item', { itemId: req.params.id });
});

router.post('/item/:id/add', (req, res) => {
    res.send(`Artículo con ID: ${req.params.id} añadido al carrito`);
    // Si deseas renderizar una vista después de realizar una acción, puedes utilizar res.render() aquí
});

router.get('/cart', (req, res) => {
    res.render('shop/cart', { pageTitle: 'Carrito de compras' });
});

router.post('/cart', (req, res) => {
    res.send('Compra realizada con éxito');
    // Si deseas renderizar una vista después de realizar una acción, puedes utilizar res.render() aquí
});



// Importar el controlador
const shopController = require('../controllers/shopController');

// Ruta para la página principal de la tienda
router.get('/', shopController);

module.exports = router;

