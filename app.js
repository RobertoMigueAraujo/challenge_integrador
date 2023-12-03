const express = require('express');
const app = express();
const path = require('path');

// Establecer el motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static('public'));

// Importar las rutas
const shopRoutes = require('./src/routes/shop');

// Usar las rutas
app.use('./src/routes/shop', shop);

const contact = require('./routes/contact');
const faq = require('./routes/faq');
const about = require('./routes/about');

app.use('/', contact);
app.use('/', faq);
app.use('/', about);

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
