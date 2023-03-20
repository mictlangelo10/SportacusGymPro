const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//Creando el servidor
const app = express();

//Conectamos a la BD
conectarDB();
app.use(cors())

app.use(express.json());

//Definir el ruteo pro aquí
app.use('/api/clases', require('./routes/clases'));
app.use('/api/instructores', require('./routes/instructores'));


app.listen(4000, () => {
    console.log("El servidor está corriendo perfectamente");
})