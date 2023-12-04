const shopControllers = {
    shop: (req, res) => res.send('Página de la tienda'),
    getItemById: (req, res) => res.send(`Ver artículo ${req.params.id}`),
    addItemToCart: (req, res) => res.send(`Añadir artículo ${req.params.id} al carrito`),
    getCart: (req, res) => res.send('Ver carrito'),
    addToCart: (req, res) => res.send('Añadir al carrito')
  };
  
  module.exports = shopControllers;
  