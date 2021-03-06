import React,{Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

//Citas en local Storage 
  let citasIniciales = JSON.parse(localStorage.getItem('citas')); 
  if ( !citasIniciales ){
      citasIniciales = [];
  }

  //Arreglo de citas 
  const [citas, guardarCitas] = useState([citasIniciales]);

  //Use efect pendiente de cambios 
  useEffect( ()=>{
    let citasIniciales = JSON.parse(localStorage.getItem('citas')); 
    if (citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
    
  }, [citas]);

//Funcion que tome las citas actuales y agregue las nuevas 
const crearCita = cita => {
    guardarCitas([
    ...citas,
    cita
  ])

}

//funcon que elimina una cita por un id
const eliminarCita = id =>{
  const nuevasCitas = citas.filter(cita =>cita.id !== id);
  guardarCitas(nuevasCitas);
}

//Mensaje condicional 
const titulo = citas.length === 1 ? 'No hay Citas': 'Adminitraciòn de  citas';
console.log(citas)  
return (
      <Fragment>
      <h2>Administrador de Pacientes</h2>
      <div className="container">
        <div className="row">
          <div className="one-half column ">
              <Formulario
              crearCita={crearCita}
              
              />
          </div>
          <div className="one-half column">
          <h2> {titulo} </h2>
               
              {
                
              citas.length === 1 ? 
                    ''
                  :
                    citas.map(cita=>(
                      <Cita 
                        key={cita.id}   
                        cita={cita}
                        eliminarCita = {eliminarCita}
                      
                      /> 

                    ))
              }
                  
          </div>

        </div>
      </div>
      </Fragment>
  );
}

export default App;
