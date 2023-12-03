const express = require('express');
const router = express.Router();

router.get('/admin', (req, res) => {
    res.send('Esta es la página principal de administración');
});

router.get('/admin/create', (req, res) => {
    res.send('Esta es la página para crear un nuevo ítem');
});

router.post('/admin/create', (req, res) => {
    res.send('Nuevo ítem creado');
});

router.get('/admin/edit/:id', (req, res) => {
    res.send(`Esta es la página para editar el ítem con ID: ${req.params.id}`);
});

router.put('/admin/edit/:id', (req, res) => {
    res.send(`Ítem con ID: ${req.params.id} editado con éxito`);
});

router.delete('/admin/delete/:id', (req, res) => {
    res.send(`Ítem con ID: ${req.params.id} eliminado con éxito`);
});

module.exports = router;
