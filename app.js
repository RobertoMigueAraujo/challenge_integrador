require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const sequelize = require('./src/models/connection');
const ProductosAdmin = require('./src/models/ProductosAdmin'); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.use('/', mainRoutes);
app.use('/', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);


const PORT = process.env.PORT || 3037;


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
