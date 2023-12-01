// mainController.js
const getHomePage = (req, res) => {
    res.send('Página de inicio');
  };
  
  const getContactPage = (req, res) => {
    res.send('Página de contacto');
  };
  
  const getAboutPage = (req, res) => {
    res.send('Página acerca de nosotros');
  };
  
  const getFAQsPage = (req, res) => {
    res.send('Página de preguntas frecuentes');
  };
  
  module.exports = {
    getHomePage,
    getContactPage,
    getAboutPage,
    getFAQsPage,
  };
  