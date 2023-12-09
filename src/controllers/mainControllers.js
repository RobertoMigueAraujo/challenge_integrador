const mainControllers = {
  index: (req, res) => {
    res.render('main/index', { title: 'Página de inicio' });
  },
  contact: (req, res) => {
    res.send('<h1>Esta es la página de contacto</h1>');
  },
  about: (req, res) => {
    res.send('<h1>Esta es la página acerca de nosotros</h1>');
  },
  faqs: (req, res) => {
    res.send('<h1>Esta es la página de preguntas frecuentes</h1>');
  }
};

module.exports = mainControllers;



