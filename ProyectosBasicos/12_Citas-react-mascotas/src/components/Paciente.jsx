import React from 'react';

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  
  const metodoEditar =(e, paciente)=>{
    console.log("paciente->", paciente);
    e.preventDefault();
    setPaciente(paciente);

  }  
  
  const metodoEliminar =(e,id)=>{
    e.preventDefault();
    const respuesta = confirm('¿Deseas eliminar este paciente?');
    if (respuesta){
      eliminarPaciente(id);
    }
  }

  return (
    <div className='px-5 mx-3 mb-3 py-10 rounded bg-green-200'>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:{' '}
      <span className='font-normal normal-case'>{paciente.nombre}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario:{' '}
      <span className='font-normal normal-case'>{paciente.propietario}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Correo:{' '}
      <span className='font-normal normal-case'>{paciente.email}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta:{' '}
      <span className='font-normal normal-case'>{paciente.fecha}10 Dic 2021</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas:{' '}
      <span className='font-normal normal-case'>{paciente.sintomas}</span>
    </p>
    <div className='flex justify-between mt-10'>
      <button
        id="btnEditar"
        type='button'
        className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md'
        onClick={(e)=>metodoEditar(e, paciente)}
      >
      Editar
      </button>    
      <button
        id="btnEliminar"
        type='button'
        className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md'
        onClick={(e)=>metodoEliminar(e, paciente.id)}
      >
      Eliminar
      </button>    
    
    </div>
  </div>   

  );
};

export default Paciente;
