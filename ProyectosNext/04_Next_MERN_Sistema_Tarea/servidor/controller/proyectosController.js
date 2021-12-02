const Proyecto = require('../modules/Proyectos');
const { validationResult } = require('express-validator'); 
const jwt = require('jsonwebtoken');


//Crear Proyectos 
exports.crearProyectos = async(req, res)=>{
    //console.log(req.body);

    //Extraer destrosuring 
    const {nombre } = req.body; 

    try {

     //Revisar que el proyecto sea unico 
     let proyecto = await Proyecto.findOne({nombre}); 
     if ( proyecto ){
         return res.status(400).json({msg:'El proyecto ya existe'});
     }

     //Revisar que que cumple con las reglas de validaciòn del routes 
     const errors = validationResult(req);
     if ( !errors.isEmpty() ){
         return res.status(400).json({errores: errors.array()})
     }

     //Proceso final 
     const Objproyecto = new Proyecto(req.body);
    
     
     //guardar el creado via jwt 
     Objproyecto.creador = req.usuario.id;
     
     //Guardar el proyecto
     Objproyecto.save();
     res.json(Objproyecto);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error A");
    }
}

//Obetener todos los proyectos del usuario actual 
exports.obteneProyectos = async(req, res)=>{
    try {
        const proyectos = await Proyecto.find({creador:req.usuario.id}).sort({creado:-1});
        res.json({proyectos});
       
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error B");

    }
}

//Udadate todos los proyectos del usuario actual 
exports.updateProyectos = async (req, res)=>{
    
      //Revisar que que cumple con las reglas de validaciòn del routes 
      const errors = validationResult(req);
      if ( !errors.isEmpty() ){
          return res.status(400).json({errores: errors.array()})
      }
 
    //Extraer informacion del proyecto 
    try {
        //Extraer destrosuring 
        const nuevoProyecto = {}; 
        const { nombre } = req.body; 
        
        //Valido si existe valor 
        if (nombre){
            nuevoProyecto.nombre = nombre; 
        }

        //Revisar el Id 
        let proyecto = await Proyecto.findById(req.params.id);
        

        //Si el proyecto existe o no 
        if (!proyecto){
            return res.status(404).json({msg:'Proyecto no encontrado'})
        }

        //Verificar el creador del proyecto 
        if (proyecto.creador.toString() !== req.usuario.id ){
            return res.status(401).json({msg:'No autorizado'});
        }

        //Actualizar 
        proyecto = await Proyecto.findByIdAndUpdate({ _id:req.params.id }, { $set:nuevoProyecto}, {new:true});
        
        res.json({proyecto});
       
    } catch (error) {
        console.log(error);
        res.status(500).send("Error en el servidor");

    }
}


//Elimina un proyecto por su id 
exports.eliminarProyectos = async (req, res)=>{

        try {

            //Revisar el Id 
            let proyecto = await Proyecto.findById(req.params.id);
            
            //Si el proyecto existe o no 
            if (!proyecto){
                return res.status(404).json({msg:'Proyecto no encontrado'})
            }

            //Verificar el creador del proyecto 
         /*   if (proyecto.creador.toString() !== req.usuario.id ){
                return res.status(401).json({msg:'No autorizado'});
            }            
          */  
            //Eliminar el proyecto 
            await Proyecto.findOneAndRemove({_id: req.params.id});
            res.json({msg:'Proyecto eliminado'});

        } catch (error) {
            console.log(error);
            res.status(500).send("Error en el servidor");
        }

}