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
        imgUrl1: "https://static.msfsports.com.au/wp-content/uploads/2019/04/MSF-Sports-3x3-Hustle-courts.jpg",
        imgUrl2: "https://i.pinimg.com/736x/47/ff/e6/47ffe6aef4aa5f6be0432f31a828b45f.jpg",
        imgUrl3: "https://www.creativeboom.com/uploads/articles/06/06345d1bda18ae2bd059bbb3a3d3ca2c9804912c_800.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Fullerton Family YMCA',
        address: '2000 Youth Way',
        city:'Los Angeles',
        description: 'Hey everyone, we are a family run business and love treating guests to our indoor facilities. We have a wide range of services from swimming pools to basketball courts.',
        price:100,
        imgUrl1: "https://mastersystemscourts.com/img/master-systems-courts-basketball-991x605.jpg",
        imgUrl2: "https://lh3.googleusercontent.com/proxy/vCdvihVwT3DOBAdOX-RyBFgC6PqdjZS4lNf0MJkO5zjjp6g85JcjOuIwk3WxDIRZQirMc_W-9HN_AeWdVv81OgBvScmPpukDGa9yyAcuxIMj7sx-JXBcxzmgpMJ-",
        imgUrl3: "https://assets.incstores.com/productimages/912x600/3782.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'No Limit Training Facility',
        address: '5440 Vineland Ave',
        city:'Los Angeles',
        description: 'NO LIMIT TRAINING FACILITY offers total fitness at an unparalleled level. Dedicated to holistric training, NO LIMIT defies conventional gym standards with an innovative approach to fitness that is both individualized and socially motivating.',
        price:500,
        imgUrl1: "https://www.ausleisure.com.au/images/ausleisure/files/Newcastle_new_basketball_courts.jpg",
        imgUrl2: "https://lh3.googleusercontent.com/proxy/vCdvihVwT3DOBAdOX-RyBFgC6PqdjZS4lNf0MJkO5zjjp6g85JcjOuIwk3WxDIRZQirMc_W-9HN_AeWdVv81OgBvScmPpukDGa9yyAcuxIMj7sx-JXBcxzmgpMJ-",
        imgUrl3: "https://assets.incstores.com/productimages/912x600/3782.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        title: 'EVERYBODY',
        address: '1845 N San Fernando Rd',
        city: 'Los Angeles',
        description: 'EVERYBODY is committed to creating a radically inclusive culture for all bodies to move, strengthen, and heal.We believe that health and wellness should be accessible, affordable and adaptive to all people regardless of their gender, sexuality, size, age, ethnicity or ability.',
        price:500,
        imgUrl1: "https://thumbor.granitemedia.com/angels-gate-park-in-san-pedro-california/HX7eZfZ-SAWLtljgyhRiyWqmSTI=/480x360/filters:format(webp):quality(80)/granite-web-prod/69/b1/69b1eaae662041709e833f4f2bb437c1.jpeg",
        imgUrl2: "https://lh3.googleusercontent.com/proxy/vCdvihVwT3DOBAdOX-RyBFgC6PqdjZS4lNf0MJkO5zjjp6g85JcjOuIwk3WxDIRZQirMc_W-9HN_AeWdVv81OgBvScmPpukDGa9yyAcuxIMj7sx-JXBcxzmgpMJ-",
        imgUrl3: "https://assets.incstores.com/productimages/912x600/3782.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'DC Fitness',
        address: '626 Coronado Ter',
        city:'Los Angeles',
        description: 'DC Fitness is a fully featured gym with premium amenities and modern facilities to help you reach all of your health and fitness goals. Despite your past or present difficulties, we believe in your potential, and want to help you transform your body, your mind, and your spirit.',
        price:450,
        imgUrl1: "https://images.unsplash.com/photo-1567010944553-36f90100d459?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        imgUrl2: "https://lh3.googleusercontent.com/proxy/vCdvihVwT3DOBAdOX-RyBFgC6PqdjZS4lNf0MJkO5zjjp6g85JcjOuIwk3WxDIRZQirMc_W-9HN_AeWdVv81OgBvScmPpukDGa9yyAcuxIMj7sx-JXBcxzmgpMJ-",
        imgUrl3: "https://assets.incstores.com/productimages/912x600/3782.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Sayon Fitness',
        address: '125 W Main St',
        city:'Los Angeles',
        description: 'Sayon Fitness is your key to getting a flatter stomach, tighter arms ,tone legs, and feeling younger in only 30 minutes. We’re a high-intensity, interval training (HIIT) studio. We also provide great basketball courts for you and your friends to hoop in',
        price:250,
        imgUrl1: "https://m.wsj.net/video/20150720/072015nybasketball/072015nybasketball_960x540.jpg",
        imgUrl2: "https://lh3.googleusercontent.com/proxy/vCdvihVwT3DOBAdOX-RyBFgC6PqdjZS4lNf0MJkO5zjjp6g85JcjOuIwk3WxDIRZQirMc_W-9HN_AeWdVv81OgBvScmPpukDGa9yyAcuxIMj7sx-JXBcxzmgpMJ-",
        imgUrl3: "https://assets.incstores.com/productimages/912x600/3782.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        title: 'Crunch Fitness - Burbank',
        address: '761 N San Fernando',
        city: 'Los Angeles',
        description: 'Crunch is a full-spectrum gym with state-of-the-art equipment, personal training, and over 200 fitness classes. Play some basketball and get your Kobe on.',
        price:170,
        imgUrl1: "https://i.pinimg.com/originals/08/bf/34/08bf34c5cac5c8e0009645965e88acc6.jpg",
        imgUrl2: "https://lh3.googleusercontent.com/proxy/vCdvihVwT3DOBAdOX-RyBFgC6PqdjZS4lNf0MJkO5zjjp6g85JcjOuIwk3WxDIRZQirMc_W-9HN_AeWdVv81OgBvScmPpukDGa9yyAcuxIMj7sx-JXBcxzmgpMJ-",
        imgUrl3: "https://assets.incstores.com/productimages/912x600/3782.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Orangetheory Fitness Downtown LA',
        address: '515 South Figueroa St',
        city:'Los Angeles',
        description: 'Orangetheory is an awesome fitness center. Our courts are state of the art and range from every sport you can imagine. Located in the heart of Los Angeles, we offer you the greatest sports arenas for the best price money can buy.',
        price:200,
        imgUrl1: "https://www.stlmag.com/downloads/268568/download/garden13.jpg?cb=a65d5e459e71cf11a458657d4e1f26c2&w=1200",
        imgUrl2: "https://lh3.googleusercontent.com/proxy/vCdvihVwT3DOBAdOX-RyBFgC6PqdjZS4lNf0MJkO5zjjp6g85JcjOuIwk3WxDIRZQirMc_W-9HN_AeWdVv81OgBvScmPpukDGa9yyAcuxIMj7sx-JXBcxzmgpMJ-",
        imgUrl3: "https://assets.incstores.com/productimages/912x600/3782.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'JEM Community Center',
        address: '9930 S Santa Monica Blvd',
        city:'Los Angeles',
        description: 'JEM Community Center is a place where we all get together to play the game we love. Come hoop anytime as we are open whenever you are ready to play. This goes to all the sports enthusiasts, come take a look for yourself and try balin with us.',
        price:230,
        imgUrl1: "https://gomightymacs.com/common/controls/image_handler.aspx?thumb_id=14&image_path=/images/2016/9/14/one_court.jpg",
        imgUrl2: "https://lh3.googleusercontent.com/proxy/vCdvihVwT3DOBAdOX-RyBFgC6PqdjZS4lNf0MJkO5zjjp6g85JcjOuIwk3WxDIRZQirMc_W-9HN_AeWdVv81OgBvScmPpukDGa9yyAcuxIMj7sx-JXBcxzmgpMJ-",
        imgUrl3: "https://assets.incstores.com/productimages/912x600/3782.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        title: 'Robinson Park',
        address: '1081 N Fair Oaks Blvd',
        city:'Los Angeles',
        description: 'Robinson Park is great. We have some great activities offered and love to ball. Come try our courts out!',
        price:50,
         imgUrl1: "https://images.pexels.com/photos/2277981/pexels-photo-2277981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        imgUrl2: "https://i.pinimg.com/736x/47/ff/e6/47ffe6aef4aa5f6be0432f31a828b45f.jpg",
        imgUrl3: "https://www.creativeboom.com/uploads/articles/06/06345d1bda18ae2bd059bbb3a3d3ca2c9804912c_800.jpg",
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
