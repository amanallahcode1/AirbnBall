'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    author: { 
      type: DataTypes.STRING},
    review: { 
      type: DataTypes.TEXT},
    spotId: {
     type: DataTypes.INTEGER,
     allowNull:false
    }
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Spot, { foreignKey: 'spotId' })
  };
  return Review;
};