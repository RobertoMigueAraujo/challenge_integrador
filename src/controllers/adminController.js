const express = require('express');
const router = express.Router();

// Controlador para la página principal de la sección de administración
const adminController = (req, res) => {
    res.render('admin/index', { pageTitle: 'Página principal de administración' });
};

// Ruta para la página principal de la sección de administración
router.get('/admin', adminController);

module.exports = router;
