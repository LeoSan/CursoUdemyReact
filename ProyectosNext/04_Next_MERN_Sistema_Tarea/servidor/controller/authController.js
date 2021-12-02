const Usuario = require('../modules/Usuarios');
const bcryptjs = require('bcryptjs');
const {validationResult } = require('express-validator'); 
const jwt = require('jsonwebtoken');


//Permite autenticar el usuario 
exports.autenticarUsuario = async (req, res) => {
    //Revisar si hay errores (Nuevo)
        const errors = validationResult(req);
        if ( !errors.isEmpty() ){
            return res.status(400).json({errores: errors.array()})
        }

    //Extrair en  email  y password 
    const {email, password } = req.body; 

    try {
        //Revisar que el usuario sea unico 
        let usuario = await Usuario.findOne({email}); 
        if ( !usuario ){
            return res.status(400).json({msg:'El usuario no existe'});
        }

        //Revisar Password
        const passwordCorrecto = await bcryptjs.compare(password, usuario.password ); 
        if (!passwordCorrecto  ){
            return res.status(400).json({msg:'Contraseña incorrecto'});
        }
        
        //Validar si el usurio esta activo 
        if ( usuario.activo === true ){
              //Crear payload
                    const payload = {
                        usuario:{
                            id:usuario.id, 
                        }
                    };

                    //firmar el jwt 
                    jwt.sign(payload, process.env.SECRETA,{ 
                        expiresIn:3600 // 1 hORA 
                    }, (error, token)=>{
                        if( error ) throw error; 

                        //Mensaje de confirmación 
                        res.json({token:token })

                    });
        }else{
            return res.status(400).json({msg:'El usuario no esta activo.'}); 
        }//fin del usuario activo 
        
    } catch (error) {
        console.log("error");
    }

}

//Permite obtener que usuario esta autenticado 
exports.autenticarAutenticado = async (req, res)=>{
    try {
        const usuario = await Usuario.findById(req.usuario.id).select('-password');
        res.json({usuario});
        
    } catch (error) {
        console.log(error); 
        res.status(500).json({msg: "Hubo un error  - autenticacion"}) 
    }

}
