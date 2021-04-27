'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sport = sequelize.define('Sport', {
    title: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    userId: DataTypes.INTEGER
  }, {});
  Sport.associate = function(models) {
    // associations can be defined here
  };
  return Sport;
};