// shopController.js

// Ejemplo de productos (puede venir de una base de datos o una API)
const products = [
    // ... tus productos aquí
];

// Controlador para la ruta '/shop'
const shopController = (req, res) => {
    // Renderizar la vista 'shop.ejs' y pasar los datos de los productos
    res.render('shop', { products });
};

module.exports = shopController;
