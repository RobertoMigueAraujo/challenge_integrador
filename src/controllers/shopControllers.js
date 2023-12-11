const multer = require('multer');
const path = require('path');
const Product = require('../models/product');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img/uploads'); 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname);
    cb(null, uniqueSuffix + fileExtension); 
  }
});

const upload = multer({ storage: storage });

const shopControllers = {
  shop: async (req, res) => {
    try {
      const products = await Product.findAll();
      res.render('shop/shop', { items: products, title: 'Página de la tienda' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error interno del servidor');
    }
  },

  itemVista: async (req, res) => {
    try {
      const products = await Product.findAll();
      res.render('shop/item', { items: products, title: 'Vista del producto' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error interno del servidor');
    }
  },

  getItemById: async (req, res) => {
    try {
      const itemId = req.params.id;
      const product = await Product.findByPk(itemId);

      if (!product) {
        res.status(404).send('Producto no encontrado');
        return;
      }

      res.render('shop/item', { product: product });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error interno del servidor');
    }
  },

  addItemToCart: (req, res) => {
    
    res.redirect('/shop/carrito');
  },

  getCart: (req, res) => {
    
    res.render('shop/carrito', { title: 'Ver carrito' });
  },

  addToCart: (req, res) => {

    res.redirect('/shop/carrito');
  },

 
  addProductWithImages: upload.single('imagen'), 
  async addProduct(req, res) {
    try {
    
      const { nombre, descripcion, precio, categoria } = req.body;
      const imagen = req.file.filename; 

      
      const Product = await Product.create({
        nombre,
        descripcion,
        precio,
        categoria,
        imagen, 
      });

      res.status(201).send('Producto agregado correctamente');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error interno del servidor al agregar el producto');
    }
  },
};

module.exports = shopControllers;
