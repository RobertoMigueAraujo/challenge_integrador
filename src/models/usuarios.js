

const { DataTypes } = require('sequelize');
const sequelize = require('./connection'); 

const Usuarios = sequelize.define('usuarios', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  repitaContraseña: {
    type: DataTypes.VIRTUAL, 
    allowNull: false,
    validate: {
      isSameAsContraseña(value) {
        if (value !== this.contraseña) {
          throw new Error('Las contraseñas no coinciden');
        }
      },
    },
  },
}, {
  tableName: 'usuarios'
});

Usuarios.sync()
  .then(() => {
    console.log('Modelo Usuarios sincronizado con la base de datos');
  })
  .catch(error => {
    console.log('Error al sincronizar el modelo Usuarios');
  });

module.exports = Usuarios;
