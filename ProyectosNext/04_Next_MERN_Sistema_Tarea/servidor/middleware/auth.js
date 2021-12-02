const jwt = require('jsonwebtoken');
require('dotenv').config({path: 'variables.env'});  //LINEA IMPORTANTE

module.exports = (req, res, next) => {
    // Leer el token del header
    const token = req.header('x-auth-token');

      /* Nota: el token debe estar presente ene l header*/

    //console.log(token)
    // Revisar ek no hay token
    if(!token){
        return res.status(401).json({msg: 'No hay token, permiso no valido'})
    }

    // Validar el token
    try {
        const cifrado = jwt.verify(token, process.env.SECRETA)
        req.usuario = cifrado.usuario; // objecto usaurio | payload
        next() // Vaya al siguiente middleware
    } catch (error) {
        res.status(401).json({msg: 'Token no válido'});
    }
}