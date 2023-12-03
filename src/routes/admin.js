const express = require('express');
const router = express.Router();

router.get('/admin', (req, res) => {
    res.render('admin/index', { pageTitle: 'Página principal de administración' });
});

router.get('/admin/create', (req, res) => {
    res.render('admin/create', { pageTitle: 'Crear un nuevo ítem' });
});

router.post('/admin/create', (req, res) => {
    res.send('Nuevo ítem creado');
    // Si deseas renderizar una vista después de crear un ítem, puedes utilizar res.render() aquí
});

router.get('/admin/edit/:id', (req, res) => {
    res.render('admin/edit', { pageTitle: `Editar ítem con ID: ${req.params.id}`, itemId: req.params.id });
});

router.put('/admin/edit/:id', (req, res) => {
    res.send(`Ítem con ID: ${req.params.id} editado con éxito`);
    // Si deseas renderizar una vista después de editar un ítem, puedes utilizar res.render() aquí
});

router.delete('/admin/delete/:id', (req, res) => {
    res.send(`Ítem con ID: ${req.params.id} eliminado con éxito`);
    // Si deseas renderizar una vista después de eliminar un ítem, puedes utilizar res.render() aquí
});

module.exports = router;
