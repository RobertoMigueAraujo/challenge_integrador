const express = require('express');
const router = express.Router();

// Ruta para la página de inicio de sesión
router.get('/auth/login', (req, res) => {
    res.send('Esta es la página de inicio de sesión');
});

// Ruta para iniciar sesión
router.post('/auth/login', (req, res) => {
    res.send('Inicio de sesión exitoso');
});

// Ruta para la página de registro
router.get('/auth/register', (req, res) => {
    res.send('Esta es la página de registro');
});

// Ruta para registrar un nuevo usuario
router.post('/auth/register', (req, res) => {
    res.send('Registro exitoso');
});

// Ruta para cerrar sesión
router.get('/auth/logout', (req, res) => {
    res.send('Has cerrado sesión con éxito');
});

module.exports = router;
