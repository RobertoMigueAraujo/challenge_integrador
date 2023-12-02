const express = require('express');
const app = express();
const routes = require('./routes/index');
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');

app.use(express.static('public'));
app.use('/', routes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log('El servidor está corriendo en http://localhost:3000');
});
