const express = require('express');
const router = express.Router();


router.get('/login', (req, res) => {
  res.send('Página de inicio de sesión');
});


router.post('/login', (req, res) => {
  res.send('Iniciar sesión');
});


router.get('/register', (req, res) => {
  res.send('Página de registro');
});


router.post('/register', (req, res) => {
  res.send('Registrar usuario');
});


router.get('/logout', (req, res) => {
  res.send('Cerrar sesión');
});

module.exports = router;
// auth.js
const authController = require('../controllers/authController');

router.get('/login', authController.getLoginPage);
router.post('/login', authController.postLogin);
router.get('/register', authController.getRegisterPage);
router.post('/register', authController.postRegister);
router.get('/logout', authController.getLogout);

module.exports = router;
