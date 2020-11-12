'use strict';
const pertanyaan = [
  {
    soal: "",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Soals', pertanyaan, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Soals", null, {})
  }
};