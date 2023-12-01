const express = require('express');
const path = require('path'); 

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'html'); 

app.use(express.static('public')); 


app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});


const mainRoutes = require('./routes/index');
app.use('/', mainRoutes);


const shopRoutes = require('./routes/shop');
app.use('/shop', shopRoutes);


const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);


const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
