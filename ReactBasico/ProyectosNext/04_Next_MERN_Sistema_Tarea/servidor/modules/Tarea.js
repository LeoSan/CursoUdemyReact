//importamos nuestro controlador 
const mongoose = require('mongoose');
//Creamos nuestra esquema 
const TareaSchema = mongoose.Schema({
     nombre:{
        type:String,
        require:true,
        trim:true,
    }, 
    estado:{
        type:Boolean,
        default:false,

    },
    creado:{
        type:Date,
        default:Date.now()
    },
    proyecto:{
        type:mongoose.Schema.Types.ObjectId, 
     }
});
//Exportamos nuestro esquema paraque pueda ser usado. 
module.exports = mongoose.model('Tarea', TareaSchema);
