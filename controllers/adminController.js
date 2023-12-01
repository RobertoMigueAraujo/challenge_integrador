// adminController.js
const getAdminPage = (req, res) => {
    res.send('Página de admin');
  };
  
  const createItem = (req, res) => {
    res.send('Crear un artículo');
  };
  
  const editItem = (req, res) => {
    const itemId = req.params.id;
    res.send(`Editar el artículo con ID ${itemId}`);
  };
  
  const deleteItem = (req, res) => {
    const itemId = req.params.id;
    res.send(`Eliminar el artículo con ID ${itemId}`);
  };
  
  module.exports = {
    getAdminPage,
    createItem,
    editItem,
    deleteItem,
  };
  