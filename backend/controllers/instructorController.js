const Instructor = require("../models/Instructor");

exports.agregarInstructor = async (req, res) => {

    try {
        let instructor;

        //Creando la clase
        instructor = new Instructor(req.body);

        await instructor.save();
        res.send(instructor);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");

    }
}

exports.obtenerInstructores = async (req, res) => {

    try {

        const instructores = await Instructor.find();
        res.json(instructores);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.actualizarInstructor = async (req, res) => {
    try {
        const { Nombre_Completo, Edad, Correo, Telefono, Especialidad, Foto_Instructor } = req.body;
        let instructor = await Instructor.findById(req.params.id);

        if (!instructor) {
            res.status(404).json({ msg: "No existe el instructor" });
        }

        instructor.Nombre_Completo = Nombre_Completo;
        instructor.Edad = Edad;
        instructor.Correo = Correo;
        instructor.Telefono = Telefono;
        instructor.Especialidad = Especialidad;
        instructor.Foto_Instructor = Foto_Instructor;

        instructor = await Instructor.findOneAndUpdate({ _id: req.params.id }, instructor, { new: true });
        res.json(instructor);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");

    }

}

exports.obtenerInstructor = async (req, res) => {
    try {
        let instructor = await Instructor.findById(req.params.id);

        if (!instructor) {
            res.status(404).json({ msg: "No existe el instructor" });
        }
        res.json(instructor);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");

    }
}

exports.eliminarInstructor = async (req, res) => {
    try {
        let instructor = await Instructor.findById(req.params.id);

        if (!instructor) {
            res.status(404).json({ msg: "No existe la clase" });
        }

        await Instructor.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Instructor eliminado exitosamente' });

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");

    }
}
