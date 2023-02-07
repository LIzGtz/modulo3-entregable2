// inportabamos express
const express = require('express');
const db = require("./utils/database");
const initModels = require('./models/init.model')

//crear una instancia de express
const app = express();

const PORT = 8000;


//probando la conexion a la base de datos
db.authenticate()
    .then(() => console.log('Autenticacion exitosa'))
    .catch((error) => console.log(error));

initModels();
//vamos a usar el metodo sync de nuestra db
db.sync({alter: true}) //devuelve una promesa
    .then(() => console.log('Base de datos sincronizada'))
    .catch((error) => console.log(error))

app.get( '/', (req, res) => {
    res.status(200).json({message: "Bienvenido al servidor"})
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

//vamos a terminar los modelos
// crear las relaciones entre los modelos
