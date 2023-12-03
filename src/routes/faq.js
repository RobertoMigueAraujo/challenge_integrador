const express = require('express');
const router = express.Router();

router.get('/faqs', (req, res) => {
  res.send('Página de Preguntas Frecuentes: Aquí encontrarás las preguntas más comunes y sus respuestas.');
});

module.exports = router;
