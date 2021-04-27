'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    title: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    lat: DataTypes.NUMERIC,
    lng: DataTypes.NUMERIC,
    userId: DataTypes.INTEGER
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
  };
  return Spot;
};