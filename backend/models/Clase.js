const mongoose = require('mongoose');

const ClaseSchema = mongoose.Schema({
    Nombre_Clase: {
        type: String,
        require: true
    },
    Descripcion: {
        type: String,
        require: true
    },
    Nombre_Instructor: {
        type: String,
        require: true
    },
    Fecha: {
        type: String,
        require: true
    },
    Hora: {
        type: String,
        require: true
    },
    Cupo: {
        type: Number,
        require: true
    },
    Foto_Clase: {
        type: String,
        require: true
    },

});

module.exports = mongoose.model('Clases', ClaseSchema);