const express = require('express')
const { Sequelize, DataTypes } = require('sequelize');

require('dotenv/config');

const app = express();

const sequelize = new Sequelize(process.env.DATABASE_URL);
sequelize.require('./models/')

app.use(require('./routes'))

app.listen(3001);