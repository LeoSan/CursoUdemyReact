import React from 'react';

const Paciente = () => {
  return (
    <div className='px-5 mx-3 mb-3 py-10 rounded bg-green-200'>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:{' '}
      <span className='font-normal normal-case'>Hook</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario:{' '}
      <span className='font-normal normal-case'>Leo</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Correo:{' '}
      <span className='font-normal normal-case'>correo@correo.com</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta:{' '}
      <span className='font-normal normal-case'>10 Dic 2021</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas:{' '}
      <span className='font-normal normal-case'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum</span>
    </p>
  </div>      
  );
};

export default Paciente;
