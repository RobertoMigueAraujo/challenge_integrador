const express = require('express');
const router = express.Router();

// Ruta para la página principal de administración
router.get('/admin', (req, res) => {
    res.send('Esta es la página principal de administración');
});

// Ruta para la página de creación de un nuevo ítem
router.get('/admin/create', (req, res) => {
    res.send('Esta es la página para crear un nuevo ítem');
});

// Ruta para crear un nuevo ítem
router.post('/admin/create', (req, res) => {
    res.send('Nuevo ítem creado');
});

// Ruta para la página de edición de un ítem específico
router.get('/admin/edit/:id', (req, res) => {
    res.send(`Esta es la página para editar el ítem con ID: ${req.params.id}`);
});

// Ruta para editar un ítem específico
router.put('/admin/edit/:id', (req, res) => {
    res.send(`Ítem con ID: ${req.params.id} editado con éxito`);
});

// Ruta para eliminar un ítem específico
router.delete('/admin/delete/:id', (req, res) => {
    res.send(`Ítem con ID: ${req.params.id} eliminado con éxito`);
});

module.exports = router;
