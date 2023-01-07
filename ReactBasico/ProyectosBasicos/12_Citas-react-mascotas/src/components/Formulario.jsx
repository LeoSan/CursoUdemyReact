import React from 'react';
import { useState, useEffect } from 'react';

import Error from '../components/Error';
const Formulario = ({pacientes, setPacientes, pacienteEditar, setPaciente}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [textoBoton, setTextoBoton] = useState('Agregar Paciente');
  
  const [error, setError] = useState(false);

  useEffect(() => {
  
    if(Object.keys(pacienteEditar).length > 0){
      setTextoBoton('Editar Paciente');
      setNombre(pacienteEditar.nombre);
      setPropietario(pacienteEditar.propietario);
      setEmail(pacienteEditar.email);
      setFecha(pacienteEditar.fecha);
      setSintomas(pacienteEditar.sintomas);
      
    }

  }, [pacienteEditar]); 
  
  const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("enviando formulario");

      if ( [nombre, propietario, email, fecha,  sintomas].includes('')){
        setError(true);
        return;

      }

    //Genear Id
    const generarId = ()=>{
      const random = Math.random().toString(36).substring(2) + Date.now();
      const fecha =  Date.now().toString(36);
      return random + fecha;
    }

      setError(false);
      //Objeto de Paciente
      let ObjetoPaciente ={
        nombre, 
        propietario, 
        email, 
        fecha,  
        sintomas
      }

      if (pacienteEditar.id){
        //Editando registro 
        ObjetoPaciente.id = pacienteEditar.id;
        const pacientesActualizados = pacientes.map((elemento)=> elemento.id === pacienteEditar.id ? ObjetoPaciente : elemento);
        setPacientes( pacientesActualizados);
        setTextoBoton('Agregar Paciente');
        setPaciente({});
        
      }else{
        //Registrando nuevo registro
        ObjetoPaciente.id = generarId();  
        setPacientes( [...pacientes, ObjetoPaciente]);
      }
      

      //Reiniciar el formulario 
     /* setNombre('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');*/
  }

  return (
      <div className='md:w-1/2 lg:w-2/5 mx-5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10'>Añade Pacientes {' '}
          <span className='text-indigo-600 font-bold'>y Administrarlos</span>
        </p>
        <form 
            onSubmit={handleSubmit}
            className='bg-green-200 shadow-md rounded py-10 px-5 mb-10'
        >
          
          {error && <Error children={'Campos obligatorios'}/>}
          <div className="mb-5">
            <label htmlFor="mascota" className='block text-gray uppercase font-bold'>Nombre Mascota</label>
            <input 
              id='mascota'
              type="text"
              placeholder='Nombre de la mascota'
              className='border-2 w-full p-2 placeholder-blue-400 rounded-md'
              value={nombre}
              onChange={ (e) => setNombre(e.target.value) }
            />
          
          </div>          
          <div className="mb-5">
            <label htmlFor="propietario" className='block text-gray uppercase font-bold'>Nombre propietario</label>
            <input 
              id='propietario'
              type="text"
              placeholder='Nombre del propietario'
              className='border-2 w-full p-2 placeholder-blue-400 rounded-md'
              value={propietario}
              onChange={ (e) => setPropietario(e.target.value) }

            />
          
          </div>          
          <div className="mb-5">
            <label htmlFor="email" className='block text-gray uppercase font-bold'>Email</label>
            <input 
              id='email'
              type="email"
              placeholder='Ingresa Correo del contacto'
              className='border-2 w-full p-2 placeholder-blue-400 rounded-md'
              value={email}
              onChange={ (e) => setEmail(e.target.value) }              
            />
          
          </div>          
          <div className="mb-5">
            <label htmlFor="alta" className='block text-gray uppercase font-bold'>Alta</label>
            <input 
              id='alta'
              type="date"
              className='border-2 w-full p-2 placeholder-blue-400 rounded-md'
              value={fecha}
              onChange={ (e) => setFecha(e.target.value) }

            />
          
          </div>          
          <div className="mb-5">
            <label htmlFor="sintomas" className='block text-gray uppercase font-bold'>sintomas</label>
            <textarea 
              id='sintomas'
              placeholder='Describe los sintomas'
              className='border-2 w-full p-2 placeholder-blue-400 rounded-md'
              value={sintomas}
              onChange={ (e) => setSintomas(e.target.value) }
            />
          
          </div>
          <input type="submit" 
                className='bg-indigo-400 w-full p-3 text-white uppercase font-bold hover:bg-indigo-300 cursor-pointer transition-colors'
                value={ textoBoton }
          />
        </form>

      </div>
  );
};

export default Formulario;
