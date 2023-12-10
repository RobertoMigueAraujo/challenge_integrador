const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const Product = sequelize.define('Product', {
  // Definición de las columnas
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Productos' 
});


(async () => {
  try {
    await Product.sync({ alter: true });
    console.log('Modelo sincronizado correctamente con la base de datos');
  } catch (error) {
    console.error('Error al sincronizar el modelo con la base de datos:', error);
  }
})();

module.exports = Product;
