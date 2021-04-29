'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      writer: {
        type: Sequelize.STRING(50)
      },
      review: {
        type: Sequelize.STRING(2500),
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {model: 'Users'},
      },
      spotId: {
        type: Sequelize.INTEGER,
        references: {model: 'Spots'},
        allowNull: false
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
    return queryInterface.dropTable('reviews');
  }
};