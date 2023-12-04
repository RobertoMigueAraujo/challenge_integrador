const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers');

router.get('/login', authControllers.login);
router.post('/login', authControllers.processLogin);
router.get('/register', authControllers.register);
router.post('/register', authControllers.processRegister);
router.get('/logout', authControllers.logout);

module.exports = router;

