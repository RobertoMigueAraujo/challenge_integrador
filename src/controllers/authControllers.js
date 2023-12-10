
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const User = require('../models/user');


const authControllers = {
  login: (req, res) => {
    res.render('auth/login', { title: 'Página de inicio de sesión' });
  },

  processLogin: (req, res) => {
    const { email, contraseña } = req.body;

    User.findOne({ where: { email: email } })
      .then(user => {
        if (!user) {
          return res.send('Usuario no registrado');
        }

        bcrypt.compare(contraseña, user.contraseña, (error, match) => {
          if (error) {
            return res.send('Error al verificar la contraseña');
          }

          if (match) {
            const token = jwt.sign({ _id: user.id }, 'clave-secreta');
            req.session.token = token;
            return res.redirect('/');
          } else {
            return res.send('Contraseña incorrecta');
          }
        });
      })
      .catch(error => {
        res.send('Error al consultar la base de datos');
      });
  },
  register: (req, res) => {
    res.render('auth/register', { title: 'Página de registro' });
  },

  processRegister: async (req, res) => {
    try {
      const { email, contraseña, repitaContraseña, nombre, apellido } = req.body;
  
      if (!email || !contraseña || !repitaContraseña || !nombre || !apellido) {
        return res.status(400).send('Todos los campos son requeridos');
      }
  
      if (contraseña !== repitaContraseña) {
        return res.status(400).send('Las contraseñas no coinciden');
      }
  
      const userExists = await User.findOne({ where: { email: email } });
      if (userExists) {
        return res.status(400).send('El email ya está registrado');
      }
  
      const hash = await bcrypt.hash(contraseña, 10);
  
      await User.create({
        email: email,
        contraseña: hash,
        nombre: nombre,
        apellido: apellido
      });
  
      
      res.send('Registro exitoso. Ahora puedes iniciar sesión');
    } catch (error) {
      console.error('Error al procesar el registro:', error);
      res.status(500).send('Error al registrar al usuario');
    }
  },
  
  logout: (req, res) => {
    res.send('<h1>Cierre de sesión exitoso</h1>');
  }
  
};

module.exports = authControllers;