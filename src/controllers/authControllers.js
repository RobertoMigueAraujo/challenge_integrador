const authControllers = {
  login: (req, res) => {
    res.render('auth/login', { title: 'Página de inicio de sesión' });
  },

  processLogin: (req, res) => {
  
    res.render('auth/login', { title: 'Página de inicio de sesión' });
  },

  register: (req, res) => {
    res.render('auth/register', { title: 'Página de registro' });
  },

  processRegister: (req, res) => {
   
    res.render('auth/login', { title: 'Página de inicio de sesión' });
  },

  logout: (req, res) => {
   
    res.render('auth/logout', { title: 'Cierre de session' });
  }
};

module.exports = authControllers;
