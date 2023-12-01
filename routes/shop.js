const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Página de la tienda');
});

router.get('/item/:id', (req, res) => {
  res.send(`Detalles del artículo con ID ${req.params.id}`);
});

router.post('/item/:id/add', (req, res) => {
  res.send(`Agregar el artículo con ID ${req.params.id} al carrito`);
});


router.get('/cart', (req, res) => {
  res.send('Página del carrito de compras');
});


router.post('/cart', (req, res) => {
  res.send('Procesar el carrito de compras');
});

module.exports = router;


// shop.js

router.get('/', shopController.getShopPage);
router.get('/item/:id', shopController.getItemDetails);
router.post('/item/:id/add', shopController.addItemToCart);
router.get('/cart', shopController.viewCart);
router.post('/cart', shopController.processCart);

module.exports = router;
