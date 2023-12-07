const authControllers = {
  login: (req, res) => {
    const user = getUserFromCredentials(req.body.email, req.body.contraseña);
    if (user) {
      if (req.body.rememberMe) {
        res.cookie('userId', user.id, { maxAge: 30 * 24 * 60 * 60 * 1000 }); 
      }
      res.redirect('/dashboard');
    } else {
      
      res.render('login', { title: 'Página de inicio de sesión', error: 'Correo electrónico o contraseña incorrectos' });
    }
  },
  register: (req, res) => {
  
    res.render('auth/register', { title: 'Página de registro' });
  },
  logout: (req, res) => {

    res.render('auth/logout', { title: 'Cerrando sesión' });
  }
};

module.exports = authControllers;
