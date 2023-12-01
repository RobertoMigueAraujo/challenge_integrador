const express = require('express');
const router = express.Router();

// Ruta para /admin (GET)
router.get('/', (req, res) => {
  res.send('Página de administración');
});

// Ruta para /admin/create (GET)
router.get('/create', (req, res) => {
  res.send('Página de create');
});

// Ruta para /admin/create (POST)
router.post('/create', (req, res) => {
  res.send('Crear un elemento');
});


router.get('/edit/:id', (req, res) => {
  res.send(`Página para editar el elemento con ID ${req.params.id}`);
});


router.put('/edit/:id', (req, res) => {
  res.send(`Editar el elemento con ID ${req.params.id}`);
});


router.delete('/delete/:id', (req, res) => {
  res.send(`Eliminar el elemento con ID ${req.params.id}`);
});

module.exports = router;
// admin.js

const adminController = require('../controllers/adminController');

router.get('/', adminController.getAdminPage);
router.get('/create', adminController.createItem);
router.get('/edit/:id', adminController.editItem);
router.get('/delete/:id', adminController.deleteItem);

module.exports = router;
