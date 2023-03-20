//Rutas para clases
const express = require('express');
const router = express.Router();
const instructorController = require('../controllers/instructorController');

// api/Clases
router.post('/', instructorController.agregarInstructor);
router.get('/', instructorController.obtenerInstructores);
router.put('/:id', instructorController.actualizarInstructor);
router.get('/:id', instructorController.obtenerInstructor);
router.delete('/:id', instructorController.eliminarInstructor);


module.exports = router;