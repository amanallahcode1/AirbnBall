'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [
      {
        title: 'Equinox Downtown LA',
        address: '444 Flower St.',
        city: 'Los Angeles',
        description: 'We have a couple of great basketball courts. Some awesome fitness rooms where you can work out and ball! Come play with us!',
        price:200,
       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Fullerton Family YMCA',
        address: '2000 Youth Way',
        city:'Los Angeles',
        description: 'Hey everyone, we are a family run business and love treating guests to our indoor facilities. We have a wide range of services from swimming pools to basketball courts.',
        price:100,
      
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'No Limit Training Facility',
        address: '5440 Vineland Ave',
        city:'Los Angeles',
        description: 'NO LIMIT TRAINING FACILITY offers total fitness at an unparalleled level. Dedicated to holistric training, NO LIMIT defies conventional gym standards with an innovative approach to fitness that is both individualized and socially motivating.',
        price:500,
       
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        title: 'EVERYBODY',
        address: '1845 N San Fernando Rd',
        city: 'Los Angeles',
        description: 'EVERYBODY is committed to creating a radically inclusive culture for all bodies to move, strengthen, and heal.We believe that health and wellness should be accessible, affordable and adaptive to all people regardless of their gender, sexuality, size, age, ethnicity or ability.',
        price:500,
 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'DC Fitness',
        address: '626 Coronado Ter',
        city:'Los Angeles',
        description: 'DC Fitness is a fully featured gym with premium amenities and modern facilities to help you reach all of your health and fitness goals. Despite your past or present difficulties, we believe in your potential, and want to help you transform your body, your mind, and your spirit.',
        price:450,
       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Sayon Fitness',
        address: '125 W Main St',
        city:'Los Angeles',
        description: 'Sayon Fitness is your key to getting a flatter stomach, tighter arms ,tone legs, and feeling younger in only 30 minutes. We’re a high-intensity, interval training (HIIT) studio. We also provide great basketball courts for you and your friends to hoop in',
        price:250,
        
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        title: 'Crunch Fitness - Burbank',
        address: '761 N San Fernando',
        city: 'Los Angeles',
        description: 'Crunch is a full-spectrum gym with state-of-the-art equipment, personal training, and over 200 fitness classes. Play some basketball and get your Kobe on.',
        price:170,
        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Orangetheory Fitness Downtown LA',
        address: '515 South Figueroa St',
        city:'Los Angeles',
        description: 'Orangetheory is an awesome fitness center. Our courts are state of the art and range from every sport you can imagine. Located in the heart of Los Angeles, we offer you the greatest sports arenas for the best price money can buy.',
        price:200,
       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'JEM Community Center',
        address: '9930 S Santa Monica Blvd',
        city:'Los Angeles',
        description: 'JEM Community Center is a place where we all get together to play the game we love. Come hoop anytime as we are open whenever you are ready to play. This goes to all the sports enthusiasts, come take a look for yourself and try balin with us.',
        price:230,
       
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        title: 'Robinson Park',
        address: '1081 N Fair Oaks Blvd',
        city:'Los Angeles',
        description: 'Robinson Park is great. We have some great activities offered and love to ball. Come try our courts out!',
        price:50,
        
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

         return queryInterface.bulkDelete('Spots', null, {});
  }
};
