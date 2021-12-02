//importamos nuestro controlador 
const mongoose = require('mongoose');
//Creamos nuestra esquema 
const ProyectoSchema = mongoose.Schema({
    nombre:{
        type: String, 
        required:true,
        trim:true,
    },
    creador:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Usuario',
    },
    fechaCreado:{
        type:Date,
        default:Date.now(), 
    },
    activo:{
        type:Boolean,
        default:true,
    }

});
//Exportamos nuestro esquema paraque pueda ser usado. 
module.exports = mongoose.model('Proyectos', ProyectoSchema);
