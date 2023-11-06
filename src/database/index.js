const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');
const Users = require('../model/Users');
const connection = new Sequelize(databaseConfig);

Users.init(connection);

module.exports = connection;
