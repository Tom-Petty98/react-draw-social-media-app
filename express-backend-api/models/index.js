const env = process.env.NODE_ENV || 'development';
const dbConfig = require("../config/config.json")[env];

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: "mysql"
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sharedDrawings = require("./SharedDrawings.js")(sequelize, Sequelize);

module.exports = db;