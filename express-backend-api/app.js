const express = require('express')
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser')
require('dotenv/config');

const app = express();

app.use(bodyParser.json())

//  const sequelize = new Sequelize(process.env.DATABASE_URL);
//  sequelize.require('./models/SharedDrawings');
const db = require("./models");
db.sequelize.sync()

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.use(require('./routes'));

app.listen(3001);