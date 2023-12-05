
const mainControllers = {
  home: (req, res) =>  res.send('<h1>Página de inicio</h1>'),
    contact: (req, res) =>  res.send('Página de contacto'),
  about: (req, res) => res.send('Página sobre nosotros'),
  faqs: (req, res) =>  res.send('Preguntas frecuentes')
} 
module.exports = mainControllers;