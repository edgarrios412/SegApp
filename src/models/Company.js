const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('company', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    nit:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    servicio:{
      type: DataTypes.STRING,
      allowNull: true,
    }
  },{timestamps:false});
};