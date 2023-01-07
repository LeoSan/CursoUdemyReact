const Tarea = require('../modules/Tarea');
const Proyectos = require('../modules/Proyectos');
const { validationResult } = require('express-validator'); 
const jwt = require('jsonwebtoken');


//Crear Tarea 
exports.crearTarea = async(req, res)=>{

     //Revisar que que cumple con las reglas de validaciòn del routes 
     const errors = validationResult(req);
     if ( !errors.isEmpty() ){
         return res.status(400).json({errores: errors.array()})
     }

     try {

        //Extraer proyecto y comprobar si existe
        const {proyecto, nombre} = req.body;

        //Revisar que el proyecto sea unico 
        /*
        let existeTarea = await Tarea.findOne({nombre}); 
        if ( existeTarea ){
            return res.status(400).json({msg:'El proyecto ya existe'});
        }*/

        const existeProyecto = await Proyectos.findById(proyecto);
        if(!existeProyecto){
            return res.status(404).json({msg:'Proyecto no encontrado'});
        }

        //Verificar el creador del proyecto 
        if (existeProyecto.creador.toString() !== req.usuario.id ){
            return res.status(401).json({msg:'No autorizado'});
        }

        //crear tarea 
        const tarea = new Tarea(req.body);
        await tarea.save();
        res.json({tarea});


         
     } catch (error) {
         console.log(error);
         res.status(500).send('Hubo un error');
     }

}

//Obtener Las tareas por proyecto 
exports.obtenerTareas = async (req, res) =>{

    //Extraer proyecto 

    try {

        //Extraer proyecto y comprobar si existe
        //const {proyecto, nombre} = req.body; //->Asi se usa cuando es un objeto 
        const {proyecto, nombre} = req.query; //--> Asi se usa cuando se envian parametros 

        //Revisar que el proyecto sea unico 
        /*
        let existeTarea = await Tarea.findOne({nombre}); 
        if ( existeTarea ){
            return res.status(400).json({msg:'El proyecto ya existe'});
        }*/

        const existeProyecto = await Proyectos.findById(proyecto);
        if(!existeProyecto){
            return res.status(404).json({msg:'Proyecto no encontrado'});
        }

        //Verificar el creador del proyecto 
        if (existeProyecto.creador.toString() !== req.usuario.id ){
            return res.status(401).json({msg:'No autorizado'});
        }

        //obtener las tareas por proyecto 
        const tareas = await Tarea.find({ proyecto }).sort({creado:-1});
        res.json({tareas});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');

    }

}

//Udadate una tarea 
exports.updateTarea = async (req, res)=>{
    
    //Revisar que que cumple con las reglas de validaciòn del routes 
    const errors = validationResult(req);
    if ( !errors.isEmpty() ){
        return res.status(400).json({errores: errors.array()})
    }

  //Extraer informacion del proyecto 
  try {
 
        //Extraer proyecto y comprobar si existe
        const {proyecto, nombre, estado} = req.body;

        //Si la tarea existe o no
        let tareaExiste = await Tarea.findById(req.params.id); // Leo : Mucho ojo es la forma de obtener los parametros por post 

        if (!tareaExiste){
            return res.status(404).json({msg:'No existe esa tarea'});
        }

        //Extraer proyecto 
        let existeProyecto = await Proyectos.findById(proyecto);

        
        //Valido si el proyecto le pertenece 
        if(!existeProyecto){
            return res.status(404).json({msg:'Proyecto no encontrado'});
        }

        //Verificar el creador del proyecto 
        if (existeProyecto.creador.toString() !== req.usuario.id ){
            return res.status(401).json({msg:'No autorizado'});
        }

        //crear un objeto con la nueva informaciòn 
        const nuevaTarea = {}
        
            nuevaTarea.nombre = nombre; 
            nuevaTarea.estado = estado; 
        
        //Guadar la tarea
        existeProyecto = await Tarea.findByIdAndUpdate({_id: req.params.id}, nuevaTarea, {new:true});
        res.json({existeProyecto});
     
  } catch (error) {
      console.log(error);
      res.status(500).send("Error en el servidor d");
  }
}


//Udadate una tarea 
exports.deleteTarea = async (req, res)=>{
    
  //Extraer informacion del proyecto 
  try {
 
        //Extraer proyecto y comprobar si existe
        //const {proyecto} = req.body;// Asi es cuando se pasa un objeto 
        const {proyecto} = req.query;// Asi es cuando se pasa parametros 

        //Si la tarea existe o no
        let tareaExiste = await Tarea.findById(req.params.id); // Leo : Mucho ojo es la forma de obtener los parametros por post 

        if (!tareaExiste){
            return res.status(404).json({msg:'No existe esa tarea'});
        }

        //Extraer proyecto 
        let existeProyecto = await Proyectos.findById(proyecto);

        
        //Valido si el proyecto le pertenece 
        if(!existeProyecto){
            return res.status(404).json({msg:'Proyecto no encontrado'});
        }

        //Verificar el creador del proyecto 
        if (existeProyecto.creador.toString() !== req.usuario.id ){
            return res.status(401).json({msg:'No autorizado'});
        }

        //Eliminar Tarea 
        await Tarea.findByIdAndRemove({_id:req.params.id})
        res.json({msg:'Tarea Eliminada'});



     
  } catch (error) {
      console.log(error);
      res.status(500).send("Error en el servidor d");
  }
}