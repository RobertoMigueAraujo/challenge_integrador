const express = require('express');
const app = express();
const path = require ('path'); 

app.set ('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src' , 'views')); 

const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.use(express.static('public'));

app.use('/', mainRoutes);
//app.use('/contact', mainRoutes);
//app.use('/about', mainRoutes);
//app.use('/faqs', mainRoutes);

app.use('/shop', shopRoutes);
app.use ('/admin', adminRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3015;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

