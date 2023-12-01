// authController.js
const getLoginPage = (req, res) => {
    res.send('Página de inicio de sesión');
  };
  
  const postLogin = (req, res) => {
    res.send('Realizar inicio de sesión');
  };
  
  const getRegisterPage = (req, res) => {
    res.send('Página de registro');
  };
  
  const postRegister = (req, res) => {
    res.send('Realizar registro');
  };
  
  const getLogout = (req, res) => {
    res.send('Cerrar sesión');
  };
  
  module.exports = {
    getLoginPage,
    postLogin,
    getRegisterPage,
    postRegister,
    getLogout,
  };
  