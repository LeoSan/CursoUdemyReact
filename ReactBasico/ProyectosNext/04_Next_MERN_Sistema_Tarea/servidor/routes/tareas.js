//Rutas para crear proyectos 
const express = require('express'); 
//Creamos el router
const router = express.Router();
//Importamos nuestro controlador 
const tareaController = require('../controller/tareaController');
//llamamos nuestra validaciones en el router
const { check } = require('express-validator'); 
//Importamos nuestro middleware de auth 
const auth  = require('../middleware/auth');

//crear una tarea
// api/tareas
router.post('/', 
            auth, 
            [
                check('nombre',  'El nombre es obligatorio').not().isEmpty(), 
                check('proyecto',  'El proyecto es obligatorio').not().isEmpty(), 
            ],
            tareaController.crearTarea
);

//Obtener las tareas por proyecto
// api/tareas 
router.get('/',
        auth,  
        tareaController.obtenerTareas

);

//Actuyalizar tarea 
// api/tareas 
router.put('/:id', 
        auth,
        tareaController.updateTarea
);

//Eliminar tarea 
// api/tareas 
router.delete('/:id', 
        auth,
      tareaController.deleteTarea
);


module.exports = router;