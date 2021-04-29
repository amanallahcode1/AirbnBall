'use strict';
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    writer: DataTypes.STRING,
    review: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER
  }, {});
  review.associate = function(models) {
    // associations can be defined here
      review.belongsTo(models.User, {foreignKey: 'userId'})
    review.belongsTo(models.Spot, {foreignKey: 'spotId'})
  };
  };
  return review;
