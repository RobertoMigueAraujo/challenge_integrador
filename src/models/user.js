const { DataTypes } = require('sequelize');
const sequelize = require('./connection');
const bcrypt = require('bcryptjs');

const User = sequelize.define('user', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
    field: 'email',
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'contraseña',
  }
}, {
  tableName: 'USERS',
  hooks: {
    beforeCreate: async (user) => {
      const hashedPassword = await bcrypt.hash(user.contraseña, 10);
      user.contraseña = hashedPassword;
    },
    beforeUpdate: async (user) => {
      if (user.changed('contraseña')) {
        const hashedPassword = await bcrypt.hash(user.contraseña, 10);
        user.contraseña = hashedPassword;
      }
    }
  }
});

User.sync()
  .then(() => {
    console.log('Modelo User sincronizado con la base de datos');
  })
  .catch(error => {
    console.log('Error al sincronizar el modelo User');
  });

module.exports = User;
