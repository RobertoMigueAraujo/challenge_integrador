const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopControllers');

router.get('/shop', shopControllers.shop);
router.get('/shop/item', shopControllers.itemVista)
router.get('/shop/item/:id', shopControllers.getItemById);
router.post('/shop/item/:id/add', shopControllers.addItemToCart);
router.get('/shop/carrito', shopControllers.getCart);
router.post('/shop/carrito', shopControllers.addToCart);

module.exports = router;

