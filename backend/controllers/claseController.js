const Clase = require("../models/Clase");

exports.crearClase = async (req, res) => {

    try {
        let clase;

        //Creando la clase
        clase = new Clase(req.body);

        await clase.save();
        res.send(clase);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");

    }
}

exports.obtenerClases = async (req, res) => {

    try {

        const clases = await Clase.find();
        res.json(clases);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.actualizarClase = async (req, res) => {
    try {
        const { Nombre_Clase, Descripcion, Nombre_Instructor, Fecha, Hora, Cupo, Foto_Clase } = req.body;
        let clase = await Clase.findById(req.params.id);

        if (!clase) {
            res.status(404).json({ msg: "No existe la clase" });
        }

        clase.Nombre_Clase = Nombre_Clase;
        clase.Descripcion = Descripcion;
        clase.Nombre_Instructor = Nombre_Instructor;
        clase.Fecha = Fecha;
        clase.Hora = Hora;
        clase.Cupo = Cupo;
        clase.Foto_Clase = Foto_Clase;

        clase = await Clase.findOneAndUpdate({ _id: req.params.id }, clase, { new: true });
        res.json(clase);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");

    }

}

exports.obtenerClase = async (req, res) => {
    try {
        let clase = await Clase.findById(req.params.id);

        if (!clase) {
            res.status(404).json({ msg: "No existe la clase" });
        }
        res.json(clase);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");

    }
}

exports.eliminarClase = async (req, res) => {
    try {
        let clase = await Clase.findById(req.params.id);

        if (!clase) {
            res.status(404).json({ msg: "No existe la clase" });
        }

        await Clase.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Clase eliminada exitosamente' });

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");

    }
}
