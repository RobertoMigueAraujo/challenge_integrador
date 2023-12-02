const express = require('express');
const router = express.Router();

// Ruta para la página de inicio
router.get('/home', (req, res) => {
    res.send('Esta es la página de inicio');
});

// Ruta para la página de contacto
router.get('/contact', (req, res) => {
    res.send('Esta es la página de contacto');
});

// Ruta para la página acerca de nosotros
router.get('/about', (req, res) => {
    res.send('Esta es la página acerca de nosotros');
});

// Ruta para la página de preguntas frecuentes
router.get('/faqs', (req, res) => {
    res.send('Esta es la página de preguntas frecuentes');
});

module.exports = router;
