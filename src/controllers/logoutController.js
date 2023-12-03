const logoutController = {
    logout: (req, res) => {
        // Lógica para cerrar la sesión del usuario
        // Por ejemplo, si estás utilizando Passport.js para la autenticación
        req.logout();

        // Renderizar la vista EJS para mostrar un mensaje después del logout
        res.render('logout', { message: '¡Has cerrado sesión exitosamente!' });
    }
};

module.exports = logoutController;
