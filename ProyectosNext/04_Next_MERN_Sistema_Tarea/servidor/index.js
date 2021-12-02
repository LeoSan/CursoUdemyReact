const express = require('express');
const conectarBD = require('./config/db');
const cors = require('cors');

//Crear el servidor 
const app = express();

//Conectar a la base de datos 
conectarBD(); 

//Habilitar cors 
app.use(cors());

//Habilitar express.json 
app.use(express.json({extended:true}));

//Puerto de la app. 
const port = process.env.port || 4000;

//Importamos nuestras rutas 
//midleware
app.use('/api/usuarios', require('./routes/usuarios'));

//midleware
app.use('/api/auth', require('./routes/auth'));

//midleware - routing
app.use('/api/proyectos', require('./routes/proyectos'));

//midleware - routing
app.use('/api/tareas', require('./routes/tareas'));

//Definimos la página principal 

/*
app.get('/', (req, res) =>{
    res.send('Hola mundo');
})

*/
//arrancamos la app 
app.listen(port, '0.0.0.0', ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})

