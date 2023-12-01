const express = require('express');
const router = express.Router();


router.get('/index', (req, res) => {
  res.send('Página de inicio');
});


router.get('/contact', (req, res) => {
  res.send('Página de contacto');
});


router.get('/about', (req, res) => {
  res.send('Página sobre nosotros');
});


router.get('/faqs', (req, res) => {
  res.send('Página de preguntas frecuentes');
});

module.exports = router;

// index.js
const mainController = require('../controllers/indexController');

router.get('/home', indexController.getHomePage);
router.get('/contact', indexController.getContactPage);
router.get('/about', indexController.getAboutPage);
router.get('/faqs', indexController.getFAQsPage);

module.exports = router;
