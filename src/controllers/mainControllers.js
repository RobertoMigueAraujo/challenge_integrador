
const mainControllers = {
  index: (req, res) =>  res.render ('/', { title: 'Página de inicio' }),
  contact: (req, res) =>  res.render ('contact', { title: 'Página de contacto' }),
  about: (req, res) => res.render('about', { title: 'Página sobre nosotros' }),
  faqs: (req, res) =>  res.render('faqs', { title: 'Preguntas frecuentes' })
} 
module.exports = mainControllers;
