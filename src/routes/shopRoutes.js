const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopControllers');

router.get('/', shopControllers.shop); // Renderiza la página principal de la tienda
router.get('/item/:id', shopControllers.getItemById); // Muestra un ítem específico por su ID
router.post('/item/:id/add', shopControllers.addItemToCart); // Agrega un ítem al carrito
router.get('/cart', shopControllers.getCart); // Muestra el contenido del carrito
router.post('/cart', shopControllers.addToCart); // Agrega ítems al carrito

module.exports = router;
