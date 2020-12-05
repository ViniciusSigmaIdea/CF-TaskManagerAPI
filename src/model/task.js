const Sequelize = require('sequelize');
const database = require('..db/db');

const Task = database.define('task',{
    id:{
        type: Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false},
    dateTask:{
        type: Sequelize.DATE,
        allowNull: false},
    obs:{
        type: Sequelize.TEXT}
})

module.exports = Task;