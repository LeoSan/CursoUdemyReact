//Rutas para autenticar usuarios 
const express = require('express'); 
//Creamos el router
const router = express.Router();
//Importamos nuestro controlador 
const authController = require('../controller/authController');
//llamamos nuestra validaciones en el router
const { check } = require('express-validator');
//Importamos nuestro middleware de auth 
const auth  = require('../middleware/auth');


//obtener un usuario 
//api/auth // midleware 
router.get('/',
    auth,
    authController.autenticarAutenticado
);

// Crea un usuario 
//api/auth // midleware 
router.post('/',
    [
        check('email',  'Agrega un email valido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({min:6}),
    ], 
    authController.autenticarUsuario
);
module.exports = router;