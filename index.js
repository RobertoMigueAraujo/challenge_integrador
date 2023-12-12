require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser'); 
const multer = require('multer'); 

const sequelize = require('./src/models/connection');
const ProductosAdmin = require('./src/models/ProductosAdmin');
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static('public'));
app.use('/img', express.static(path.join(__dirname, 'public', 'img')));

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.json());
app.use(methodOverride('_method'));


app.use('/', mainRoutes);
app.use('/', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente.');
    await ProductosAdmin.sync();
    console.log('Modelo ProductosAdmin sincronizado con la base de datos.');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error de conexión:', error);
  }
})();
