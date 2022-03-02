import { useState, useEffect } from 'react';

import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";


function App() {
  


  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});


  useEffect(()=>{
    const obtenerLS = ()=>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    }

    obtenerLS();
  }, []);  
  
  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente=(id)=>{
    //console.log('Eliminado', id);
    const pacientesActualizados = pacientes.filter(elemento => elemento.id !== id)
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20 ">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          pacienteEditar={paciente}
          setPaciente={setPaciente}
        />
        <Listado 
            pacientes={pacientes}  
            setPaciente={setPaciente}
            setPacientes={setPacientes}
            eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>

  )
}

export default App
