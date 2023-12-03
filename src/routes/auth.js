const express = require('express');
const router = express.Router();

// Controlador para las rutas de autenticación
const authController = require('../controllers/authController');

// Ruta para la página de inicio de sesión
router.get('/login', (req, res) => {
    res.render('auth/login', { pageTitle: 'Inicio de sesión' });
});

// Ruta para el proceso de inicio de sesión (POST)
router.post('/login', (req, res) => {
    // Lógica de procesamiento de inicio de sesión
    // Si se necesita redireccionar o renderizar una vista después del inicio de sesión, puedes utilizar res.render() aquí
    // authController.processLogin(req, res); // Esto depende de la lógica específica de tu aplicación
});

// Otras rutas de autenticación...

module.exports = router;
