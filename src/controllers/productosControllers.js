const express = require('express');
const router = express.Router();

const productos = require('../moduls/productos'); 


router.get('/', (req, res) => {
    res.render('shop', { productos: productos });
});

module.exports = router;
