const Sequelize = require("sequelize");

const db = new Sequelize("web2", "root", "123456", {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
  pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

module.exports = db;
