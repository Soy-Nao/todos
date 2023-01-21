const {Sequelize} = require('sequelize');

//crear una una instancia con parametros de configuración de nuestra base de datos
//un objeto  de configuración --> credenciales de mi base de datos
const db =new Sequelize({
    database: "todoapp",
    username: "postgres", 
    host : "localhost", //127.0.0.1
    post: "5432",
    password: "root", //pones tu contraseña
    dialect: "postgres",//la base de datos q estamos usando
    logging: false,
});

module.exports = db;