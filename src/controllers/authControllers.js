const authControllers = {
    login: (req, res) => res.render('Página de inicio de sesión'),
    processLogin: (req, res) => res.render('Procesando inicio de sesión'),
    register: (req, res) => res.render('Página de registro'),
    processRegister: (req, res) => res.render('Procesando registro'),
    logout: (req, res) => res.render('Cerrando sesión')
  };
  
  module.exports = authControllers;
  