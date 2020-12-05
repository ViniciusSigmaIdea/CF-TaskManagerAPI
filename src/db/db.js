const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.NAME_DB, process.env.USER_DB, process.env.PASSWORD_DB, {dialect: process.env.DIALECT_DB, host: process.env.HOST_DB});
 
module.exports = sequelize;