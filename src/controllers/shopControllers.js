const shopControllers = {
  shop: (req, res) => {
   
    res.render('shop/shop', { title: 'Página de la tienda' });
  },
  getItemById: (req, res) => {
    const itemId = req.params.id;

    res.render('shop/item', { itemId: itemId });
  },
  addItemToCart: (req, res) => {
    const itemId = req.params.id;
  
    res.redirect('/shop/cart');
  },
  getCart: (req, res) => {
   
    res.render('shop/cart', { title: 'Ver carrito' });
  },
  addToCart: (req, res) => {
   
    res.redirect('/shop/cart');
  }
};

module.exports = shopControllers;
