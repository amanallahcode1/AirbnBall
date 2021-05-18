'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    spotId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model:"Spots"} 
    }, 
    userId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model:"Users"}  
    }, 
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
     Booking.belongsTo(models.User, { foreignKey: 'userId' });
     Booking.belongsTo(models.Spot, { foreignKey: 'spotId' });
  };
  return Booking;
};