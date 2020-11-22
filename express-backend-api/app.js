const express = require('express')
const { Sequelize } = require('sequelize');

require('dotenv/config');

const app = express();

//  const sequelize = new Sequelize(process.env.DATABASE_URL);
//  sequelize.require('./models/SharedDrawings');
const db = require("./app/models");
db.sequelize.sync()

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.use(require('./routes'));

app.listen(3001);