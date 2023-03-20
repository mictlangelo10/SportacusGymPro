//Rutas para clases
const express = require('express');
const router = express.Router();
const claseController = require('../controllers/claseController')

// api/Clases
router.post('/', claseController.crearClase);
router.get('/', claseController.obtenerClases);
router.put('/:id', claseController.actualizarClase);
router.get('/:id', claseController.obtenerClase);
router.delete('/:id', claseController.eliminarClase);


module.exports = router;