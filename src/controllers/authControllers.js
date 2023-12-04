const authControllers = {
    login: (req, res) => res.send('Página de inicio de sesión'),
    processLogin: (req, res) => res.send('Procesando inicio de sesión'),
    register: (req, res) => res.send('Página de registro'),
    processRegister: (req, res) => res.send('Procesando registro'),
    logout: (req, res) => res.send('Cerrando sesión')
  };
  
  module.exports = authControllers;
  