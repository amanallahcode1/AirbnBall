'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull:false
      },
      address: {
        type: Sequelize.STRING,
        allowNull:false
      },
      
      city: {
        type: Sequelize.STRING,
        allowNull:false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull:false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      lat: {
        type: Sequelize.NUMERIC(10,5),
      },
      lng: {
        type: Sequelize.NUMERIC(10,5),
      },
      userId: {
        type: Sequelize.INTEGER,
          references: {
              model: {
                  tableName: "Users"
              }
          },
       
      },
       imgUrl1: {
        type: Sequelize.STRING,
      },
       imgUrl2: {
        type: Sequelize.STRING,
      },
       imgUrl3: {
        type: Sequelize.STRING,
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spots');
  }
};