const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('offer', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    puesto:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    company: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    salario:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    date:{
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue:() => new Date()
    }
  },{timestamps:false});
};