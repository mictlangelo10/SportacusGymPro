const mongoose = require('mongoose');

const InstructorSchema = mongoose.Schema({
    Nombre_Completo: {
        type: String,
        require: true
    },
    Edad: {
        type: Number,
        require: true
    },
    Correo: {
        type: String,
        require: true
    },
    Telefono: {
        type: Number,
        require: true
    },
    Especialidad: {
        type: String,
        require: true
    },
    Foto_Instructor: {
        type: String,
        require: true
    },

});

module.exports = mongoose.model('Instructores', InstructorSchema);