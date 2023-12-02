const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
    res.send('Esta es la página de inicio');
});

router.get('/contact', (req, res) => {
    res.send('Esta es la página de contacto');
});

router.get('/about', (req, res) => {
    res.send('Esta es la página acerca de nosotros');
});

router.get('/faqs', (req, res) => {
    res.send('Esta es la página de preguntas frecuentes');
});

module.exports = router;
