const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/NAME_OF_DB', {
  define: {
    timestamps: false,
    underscored: true,
  },
  logging: false,
});

module.exports = db;
