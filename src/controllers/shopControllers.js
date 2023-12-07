const shopControllers = {
  shop: (req, res) => {
    res.render('shop/shop', { title: 'Página de la tienda' });
  },
  getItemById: (req, res) => {
    const itemId = req.params.id;
    res.render('shop/item/viewItem', { itemId: itemId });
  },
  addItemToCart: (req, res) => {
    const itemId = req.params.id;
    res.render('shop/cart/addToCart', { itemId: itemId });
  },
  getCart: (req, res) => {
    res.render('shop/cart/viewCart', { title: 'Ver carrito' });
  },
  addToCart: (req, res) => {
    res.render('shop/cart/addToCart', { title: 'Añadir al carrito' });
  }
};

module.exports = shopControllers;
