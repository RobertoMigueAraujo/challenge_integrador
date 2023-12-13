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
      const salt = await bcrypt.genSaltSync(10);
      const hashedPassword = await bcrypt.hash(user.contraseña, salt);
      user.contraseña = hashedPassword;
    },
    beforeUpdate: async (user) => {
      if (user.changed('contraseña')) {
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(user.contraseña, salt);
        user.contraseña = hashedPassword;
      }
    }
  }
});

async function insertarUsuario() {
  try {
    const email = 'Grp11@x.com';
    const contraseña = 'Qwerty21';

   
    const usuarioCreado = await User.create({
      email: email,
      contraseña: contraseña 
    });

    console.log('Usuario agregado exitosamente:', usuarioCreado.toJSON());
  } catch (error) {
    console.error('Error al insertar usuario:', error);
  }
}

User.sync()
  .then(() => {
    console.log('Modelo User sincronizado con la base de datos');
    insertarUsuario(); 
  })
  .catch(error => {
    console.log('Error al sincronizar el modelo User');
  });

module.exports = User;
