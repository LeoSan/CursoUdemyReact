import React from 'react';
import Paciente from './Paciente';

const Listado = ({pacientes}) => {
  
  
  return (
    <div className='md:w-1/2 lg:w-3/5 '>
      <h2 className='font-black text-3xl text-center'>Listado Paciente</h2>
      <p className='text-xl mt-5 mb-10 text-center'>
        Administra tus {' '}
        <span className='text-indigo-400 font-bold'>Pacientes y Citas</span>
      </p>
        <div className='md:h-screen overflow-y-scroll'>
            {pacientes.map( (elemento, index)=>(
              <Paciente
                key={elemento.id}
                paciente={elemento}
              />

            ))}
            
        </div>
    </div>
  );
};

export default Listado;
