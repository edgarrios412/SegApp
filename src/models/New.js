const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('new', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    pathImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    section: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue:() => new Date()
    },
  },{timestamps:false});
};