const express = require('express');
const router = express.Router();

// Ruta para la página de inicio de sesión
router.get('/auth/login', (req, res) => {
    res.send('Esta es la página de inicio de sesión');
});

router.post('/auth/login', (req, res) => {
    res.send('Inicio de sesión exitoso');
});

router.get('/auth/register', (req, res) => {
    res.send('Esta es la página de registro');
});

router.post('/auth/register', (req, res) => {
    res.send('Registro exitoso');
});

router.get('/auth/logout', (req, res) => {
    res.send('Has cerrado sesión con éxito');
});

module.exports = router;
