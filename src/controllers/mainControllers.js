
const mainControllers = {
  index: (req, res) => {
    res.render('main/index', { title: 'Página de inicio' });
  },
  contact: (req, res) => {
    res.render('main/contact', { title: 'Página de contacto' });
  },
  about: (req, res) => {
    res.render('main/about', { title: 'Acerca de nosotros' });
  },
  faqs: (req, res) => {
    res.render('main/faqs', { title: 'Preguntas frecuentes' });
  }
};


module.exports = mainControllers;


