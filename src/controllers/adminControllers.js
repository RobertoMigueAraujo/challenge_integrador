const adminControllers = {
    admin: (req, res) => res.render('Panel de administración'),
    create: (req, res) => res.render('Crear elemento'),
    save: (req, res) => res.render('Guardar elemento'),
    edit: (req, res) => res.render(`Editar elemento ${req.params.id}`),
    update: (req, res) => res.render(`Actualizar elemento ${req.params.id}`),
    remove: (req, res) => res.render(`Eliminar elemento ${req.params.id}`)
  };
  
  module.exports = adminControllers;
  