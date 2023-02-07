const { Sequelize } = require('sequelize');

//crear una instancia de configuracion de nuestra base de datos
//un objeto de configuracion --> credenciales de mi base de datos
const db = new Sequelize({
    database: "todoapp",
    username: "postgres",
    host: "localhost",
    port: "5432",
    password: "ruut",
    dialect: "postgres"
});

module.exports = db;