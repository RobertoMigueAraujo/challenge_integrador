const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopControllers');

router.get('/shop', shopControllers.shop);
router.get('/shop/item/:id', shopControllers.getItemById);
router.post('/shop/item/:id/add', shopControllers.addItemToCart);
router.get('/shop/cart', shopControllers.getCart);
router.post('/shop/cart', shopControllers.addToCart);

module.exports = router;

