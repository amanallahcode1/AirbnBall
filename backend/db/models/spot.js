'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    title: {
      type: DataTypes.STRING,
      allowNull:false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
  },
    city: {
     type:DataTypes.STRING,
     allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    lat: {
      type: DataTypes.NUMERIC,
      allowNull: false
      },
    lng: {
     type: DataTypes.NUMERIC,
     allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false
      }
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Spot;
};