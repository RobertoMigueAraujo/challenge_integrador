const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const ProductosAdmin = sequelize.define('ProductosAdmin', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  code: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  category: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  editLink: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  deleteLink: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
},
 {
  timestamps: false, //
  freezeTableName: true
});

module.exports = ProductosAdmin;
