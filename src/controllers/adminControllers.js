const Producto = require('../models/ProductosAdmin');

const adminControllers = {
  getAllProducts: async (req, res) => {
    try {
      const productos = await Producto.findAll(); 
      if (!productos || productos.length === 0) {
        console.log('No se encontraron productos');
      } else {
        console.log(productos);
      }
      res.render('admin/admin', { productos: productos });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error obteniendo productos');
    }
  },
  

  showCreateProduct: (req, res) => {
    res.render('admin/create'); 
  },

  createProduct: async (req, res) => {
    try {
      await Producto.create(req.body); 
      res.redirect('/admin'); 
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creando el producto');
    }
  },
  showEdit: async (req, res) => {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    res.render('admin/edit', { producto });
  },
  
 edit: async (req, res) => {
    try {
      const { id } = req.params;
      const producto = await Producto.findByPk(id); 
      res.render('admin/edit', { producto }); 
    } catch (error) {
      console.error(error);
      res.status(500).send('Error obteniendo el producto para editar');
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      await Producto.update(req.body, { where: { id } }); 
      res.redirect('/admin/admin'); 
    } catch (error) {
      console.error(error);
      res.status(500).send('Error actualizando el producto');
    }
  },


  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      await Producto.destroy({ where: { id } });
      res.redirect('/admin/admin');
    } catch (error) {
      console.error(error);
      res.status(500).send(`Error eliminando el producto: ${error.message}`);
    }
  }
  

};

module.exports = adminControllers;
