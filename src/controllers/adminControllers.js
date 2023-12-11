const adminControllers = {
  admin: (req, res) => res.render ('admin/admin'),
  create: (req, res) => res.render('admin/create'),
  save: (req, res) => res.render ('admin/guardarElemento'),
  edit: (req, res) => res.render (`admin/editarElemento-${req.params.id}`),
  update: (req, res) => res.render (`admin/actualizarElemento-${req.params.id}`),
  remove: (req, res) => res.render(`admin/eliminarElemento-${req.params.id}`),



  edit: (req, res) => {
    const productId = req.params.id;  
    const productDetails = getProductDetails(productId); 

    if (!productDetails) {
     
      return res.status(404).send('Producto no encontrado');
    }

    res.rende ('admin/edit', { producto: productDetails });
  },

  remove: (req, res) => {
    const productId = req.params.id; 
    deleteProduct(productId); 

    res.redirect ('/admin');
  },

 
};

module.exports = adminControllers;




  