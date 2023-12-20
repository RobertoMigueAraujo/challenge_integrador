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
  createProduct: async (req, res) => {
    try {
    
      const { name, category } = req.body;

     
      const nuevoProducto = await Producto.create({
        name,
        category,
      });

      res.status(201).send('Producto creado correctamente');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al crear el producto');
    }
  },
  showCreateProduct: async (req, res) => {
    try {
      const producto = {}; 
  
      res.render('admin/create', { producto }); 
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener el producto para crear');
    }
  },
  

 showEdit: async (req, res) => {
   const { id } = req.params;
  const producto = await Producto.findByPk(id);
   res.render('admin/edit', { producto });
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
      console.log('Producto eliminado exitosamente'); 
      res.send('Producto eliminado exitosamente'); 
    } catch (error) {
      console.error(error);
      res.status(500).send(`Error eliminando el producto: ${error.message}`);
    }
  }
};

module.exports = adminControllers;
