const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
    res.render('index/home', { pageTitle: 'Página de inicio' });
});

router.get('/contact', (req, res) => {
    res.render('index/contact', { pageTitle: 'Página de contacto' });
});

router.get('/about', (req, res) => {
    res.render('index/about', { pageTitle: 'Acerca de nosotros' });
});

router.get('/faqs', (req, res) => {
    res.render('index/faqs', { pageTitle: 'Preguntas frecuentes' });
});

module.exports = router;
