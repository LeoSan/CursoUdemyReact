//Rutas para crear proyectos 
const express = require('express'); 
//Creamos el router
const router = express.Router();
//Importamos nuestro controlador 
const proyectosController = require('../controller/proyectosController');
//llamamos nuestra validaciones en el router
const { check } = require('express-validator');

//Importamos nuestro middleware de auth 
const auth  = require('../middleware/auth');


// Crea un Proyecto 
//api/proyectos // midleware 
router.post('/',
    auth, //Esto es la funcion del middleware middleware/auth.js     
    [
        check('nombre',  'El nombre es obligatorio').not().isEmpty(),
    ],
    proyectosController.crearProyectos
);

//Obtener todos los proyectos 
//api/proyectos // midleware 
router.get('/',
    auth, //Esto es la funcion del middleware middleware/auth.js     //Para autenticar
    proyectosController.obteneProyectos
);

//Actualizar  un proyecto 
//api/proyectos // midleware 
router.put('/:id',//Comodin 
    auth, //Esto es la funcion del middleware middleware/auth.js     //Para autenticar
    [
        check('nombre',  'El nombre es obligatorio').not().isEmpty(),
    ],    
    proyectosController.updateProyectos
);

//Eliminar un proyecto 
//api/proyectos // midleware 
router.delete('/:id',//Comodin 
    auth, //Esto es la funcion del middleware middleware/auth.js     //Para autenticar
    proyectosController.eliminarProyectos
);



module.exports = router;