//importamos nuestro controlador 
const mongoose = require('mongoose');

//Creamos nuestra esquema 
const UsauriosSchema = mongoose.Schema({

     nombre:{
        type: String, 
        required:true,
        trim:true,
     }, 
     email:{
        type: String, 
        required:true,
        trim:true,
        unique:true,
     },
     password:{
        type: String, 
        required:true, 
        trim:true,
        unique:true,
     }, 
     registro:{
         type:Date,
         default:Date.now(), 
     }, 
     activo:{
        type:Boolean,
        default:true,
     }

});

//Exportamos nuestro esquema paraque pueda ser usado. 
module.exports = mongoose.model('Usuario', UsauriosSchema);
