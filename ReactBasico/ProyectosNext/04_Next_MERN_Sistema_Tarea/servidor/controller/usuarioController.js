const Usuario = require('../modules/Usuarios');
const bcryptjs = require('bcryptjs');
const {validationResult } = require('express-validator'); 
const jwt = require('jsonwebtoken');


exports.crearUsuario = async(req, res)=>{
    //console.log('Envia', req.body );
    //Revisar si hay errores (Nuevo)
    const errors = validationResult(req);
    if ( !errors.isEmpty() ){
        return res.status(400).json({errores: errors.array()})
    }

    //Extraer destrosuring 
    const {email, password } = req.body; 

    try {
        //Revisar que el usuario sea unico 
        let usuario = await Usuario.findOne({email}); 
        if ( usuario ){
            return res.status(400).json({msg:'El usuario ya existe'});
        }
        
        //Crea el nuevo  usuario 
        usuario = new Usuario(req.body);
        
        //hashear el password
        const salt = await bcryptjs.genSalt(10);
        usuario.password =  await bcryptjs.hash( password , salt );

        //Guarda el nuevo usuario 
        await usuario.save();

        //Crear payload
        const payload = {
            usuario:{
                id:usuario.id, 
            }

        };

        //firmar el jwt 
        jwt.sign(payload, process.env.SECRETA,{ 
            expiresIn:3600 // 1 hORA expira 
        }, (error, token)=>{
            if( error ) throw error; 

              //Mensaje de confirmación 
              res.json({token:token })

        });

    } catch (error) {
        console.log(error);
        res.status(400).send("Hubo un error");
    }
}