'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {}); */
  return queryInterface.bulkInsert('Reviews', [{
    author: 'LeBron James',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Kevin Durant',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Stephen Curry',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'James Harden',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Luka Doncic',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Michael Jordan',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Chris Paul',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Russell Westbrook',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Shaquille O\'Neal',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Kawhi Leonard',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Anthony Davis',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Bradley Beal',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Kareem Abdul-Jabbar',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Jimmy Butler',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Paul George',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Carmelo Anthony',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Klay Thompson',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Zion Williamson',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Devin Booker',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Dwyane Wade',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Allen Iverson',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Charles Barkley',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Draymond Green',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Allen Iverson',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Bam Adebayo',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Samantha Wheeler',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    author: 'Harvey Spector',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotId: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },

], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
