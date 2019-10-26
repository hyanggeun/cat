'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkInsert('cat', [{

        lat: 10,
        lng: 10,
        title: "title1",
        food: true,
        water: true,
        shelter: true,
        special_note:"specialnote1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {

        lat: 20,
        lng: 20,
        title: "title2",
        food: true,
        water: true,
        shelter: true,
        special_note:"specialnote2",
        created_at: new Date(),
        updated_at: new Date()
      },
      {

        lat: 30,
        lng: 30,
        title: "title3",
        food: true,
        water: true,
        shelter: true,
        special_note:"specialnote3",
        created_at: new Date(),
        updated_at: new Date()
      },
      {

        lat: 40,
        lng: 40,
        title: "title4",
        food: true,
        water: true,
        shelter: true,
        special_note:"specialnote4",
        created_at: new Date(),
        updated_at: new Date()
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
  }
};
