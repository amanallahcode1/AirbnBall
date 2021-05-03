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
  
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false
      },

    imgUrl1: {
        type: DataTypes.STRING,
      },

    imgUrl2: {
      type: DataTypes.STRING,
      },
       
    imgUrl3: {
        type: DataTypes.STRING,
        
      },
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Spot;
};