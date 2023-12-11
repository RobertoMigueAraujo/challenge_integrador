const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers');
const { body } = require('express-validator');
 
router.get('/login', authControllers.login);
router.post('/login', [
  body('email').isEmail().withMessage('Por favor ingresa un email válido'),
  body('contraseña').isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres')
], authControllers.processLogin); 


router.get('/register', authControllers.register);
router.post('/register', [
  body('nombre').notEmpty().withMessage('El nombre es requerido'),
  body('apellido').notEmpty().withMessage('El apellido es requerido'),
  body('email').isEmail().withMessage('Por favor ingresa un email válido'),
  body('contraseña').isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres'),
  body('repitaContraseña').custom((value, { req }) => {
    if (value !== req.body.contraseña) {
      throw new Error('Las contraseñas no coinciden');
    }
    return true;
  })
], authControllers.processRegister); 

router.get('/logout', authControllers.logout);

module.exports = router;
