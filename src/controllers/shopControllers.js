const shopControllers = {
    shop: (req, res) => res.render('/' , {title: 'Página de la tienda'}),
    getItemById: (req, res) => res.render(`Ver artículo ${req.params.id}`),
    addItemToCart: (req, res) => res.render(`Añadir artículo ${req.params.id} al carrito`),
    getCart: (req, res) => res.render('' , {title: 'Ver carrito'}),
    addToCart: (req, res) => res.render('' , { title: 'Añadir al carrito'})
  };
  
  module.exports = shopControllers;
  
