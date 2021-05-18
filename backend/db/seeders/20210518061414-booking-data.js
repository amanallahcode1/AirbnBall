
'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Bookings', [
            {
              startDate: "2021-5-16",
              endDate: "2021-5-21",
              userId: 1,
              spotId: 2,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              startDate: "2021-6-16",
              endDate: "2021-6-21",
              userId: 1,
              spotId: 4,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              startDate: "2021-5-20",
              endDate: "2021-5-26",
              userId: 1,
              spotId: 6,
              createdAt: new Date(),
              updatedAt: new Date()
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Bookings', null, {});
    }
};