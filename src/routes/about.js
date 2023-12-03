const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
  res.send('Página Acerca de Nosotros: Información sobre nuestra empresa.');
});

module.exports = router;
