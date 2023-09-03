const sequelize = require('sequelize')

const Connection = new sequelize('guiapress','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = Connection;