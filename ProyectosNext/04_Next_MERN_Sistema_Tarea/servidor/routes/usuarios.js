//Rutas para crear usuarios 
const express = require('express'); 
//Creamos el router
const router = express.Router();
//Importamos nuestro controlador 
const usuarioController = require('../controller/usuarioController');
//llamamos nuestra validaciones en el router
const { check } = require('express-validator');



// Crea un usuario 
//api/usuarios // midleware 
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email',  'Agrega un email valido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({min:6}),
    ], 
    usuarioController.crearUsuario
);
module.exports = router;