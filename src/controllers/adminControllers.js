const adminControllers = {
    admin: (req, res) => res.send('Panel de administración'),
    create: (req, res) => res.send('Crear elemento'),
    save: (req, res) => res.send('Guardar elemento'),
    edit: (req, res) => res.send(`Editar elemento ${req.params.id}`),
    update: (req, res) => res.send(`Actualizar elemento ${req.params.id}`),
    remove: (req, res) => res.send(`Eliminar elemento ${req.params.id}`)
  };
  
  module.exports = adminControllers;
  