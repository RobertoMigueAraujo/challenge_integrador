// shopController.js
const getShopPage = (req, res) => {
    res.send('Página de la tienda');
  };
  
  const getItemDetails = (req, res) => {
    const itemId = req.params.id;
    res.send(`Detalles del artículo con ID ${itemId}`);
  };
  
  const addItemToCart = (req, res) => {
    const itemId = req.params.id;
    res.send(`Agregar el artículo con ID ${itemId} al carrito`);
  };
  
  const viewCart = (req, res) => {
    res.send('Página del carrito de compras');
  };
  
  const processCart = (req, res) => {
    res.send('Procesar el carrito de compras');
  };
  
  module.exports = {
    getShopPage,
    getItemDetails,
    addItemToCart,
    viewCart,
    processCart,
  };
  