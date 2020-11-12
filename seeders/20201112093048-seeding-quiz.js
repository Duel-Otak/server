'use strict';
const pertanyaan = [
  {
    soal: "Pangeran Harry lebih tinggi dari Pangeran William",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Unta memiliki tiga set bulu mata",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Ada lima nol dalam seratus ribu",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Di Harry Potter, Draco Malfoy tidak memiliki saudara kandung",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Jika Anda menjumlahkan kedua angka di sisi dadu yang berlawanan, jawabannya selalu 7",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Kopi terbuat dari buah beri",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Bulan hanya 50 persen dari massa Bumi.",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Australia lebih lebar dari bulan",
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
    soal: "Kera tidak bisa tertawa.",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Siput bisa tidur selama tiga bulan.",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Anda bisa bersin saat tidur",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Jepang memiliki semangka persegi.",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Cula badak terbuat dari rambut.",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Semua raja di setumpuk kartu standar memiliki kumis.",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Nemo adalah ikan buntal.",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Dimungkinkan untuk menghipnotis katak dengan meletakkannya di punggungnya dan dengan lembut membelai perutnya.",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Kelelawar selalu berbelok ke kanan saat keluar gua.",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Pupil kambing berbentuk diagonal.",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Menonton film horor tidak memiliki reaksi terhadap tubuh",
    jawab: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Rambut wajah manusia tumbuh lebih cepat daripada rambut lain di tubuh.",
    jawab: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    soal: "Ada kejuaraan dunia melempar ponsel.",
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