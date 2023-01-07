import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

//State Formulario
const [busqueda, guardarBusqueda] = useState({
  ciudad:'',
  pais:'',
})

//Extraer ciudad y pais 
const {ciudad, pais} = busqueda;

//controlar la consulta 
const [consultar, guardarConsultar] = useState(false);


//Almacenar el resultado en un state en un useState
const [resultado, setResultado] = useState({});

//Estate de error 
const [error, guardarError] = useState(false);


useEffect(() => {
    const consultarAPI = async () =>{

      if (consultar){
        //const appId = '5652b70c47d6978050611d43638fac31';
        const appId = '1986b49f3808691fb702cbb392bb9310';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado);
        console.log(resultado);
        guardarConsultar(false);

        //Valida consulta 
        if (resultado.cod === "404"){
          guardarError(true);
        }else{
          guardarError(false);
        }


      }
    }
    consultarAPI();
    //eslint-disable-next-line
}, [consultar]);

let componente;
if (error){
  componente = <Error mensaje="No hay resultados"/>
}else{
  //Carga condicional de componentes 
  componente = <Clima
                    resultado={resultado}
              />
}



  return (
    <Fragment>
    <Header
        titulo='Clima React App'
    />
    <div className='contenedor-form'>
        <div className='container'>
            <div className='row'>
                <div className='col m6 s12'> 
                    <Formulario
                      busqueda={busqueda}
                      guardarBusqueda={guardarBusqueda}
                      guardarConsultar ={guardarConsultar}
                    
                    />
                </div>  
                <div className='col m6 s12'> 
                    {componente}
                </div>  
            </div>  
        </div>  
    </div>


    </Fragment>
  );
}

export default App;
