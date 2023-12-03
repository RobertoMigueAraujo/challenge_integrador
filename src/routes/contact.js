
module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/contacto', (req, res) => {
  res.send('Página de contacto: Contáctanos en contact@example.com');
});

module.exports = router;
