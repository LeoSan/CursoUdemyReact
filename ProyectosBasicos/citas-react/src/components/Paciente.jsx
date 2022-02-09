import React from 'react';

const Paciente = ({paciente}) => {
  
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
  </div>      
  );
};

export default Paciente;
