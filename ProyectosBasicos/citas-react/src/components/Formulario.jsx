import React from 'react';
import { useState, useEffect } from 'react';

const Formulario = () => {
  return (
      <div className='md:w-1/2 lg:w-2/5 '>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10'>Añade Pacientes {' '}
          <span className='text-indigo-600 font-bold'>y Administrarlos</span>
        </p>
        <form className='bg-green-200 shadow-md rounded py-10 px-5 mb-10'>
          <div className="mb-5">
            <label htmlFor="mascota" className='block text-gray uppercase font-bold'>Nombre Mascota</label>
            <input 
              id='mascota'
              type="text"
              placeholder='Nombre de la mascota'
              className='border-2 w-full p-2 placeholder-blue-400 rounded-md'
            />
          
          </div>          
          <div className="mb-5">
            <label htmlFor="propietario" className='block text-gray uppercase font-bold'>Nombre propietario</label>
            <input 
              id='propietario'
              type="text"
              placeholder='Nombre del propietario'
              className='border-2 w-full p-2 placeholder-blue-400 rounded-md'
            />
          
          </div>          
          <div className="mb-5">
            <label htmlFor="email" className='block text-gray uppercase font-bold'>Email</label>
            <input 
              id='propietario'
              type="email"
              placeholder='Ingresa Correo del contacto'
              className='border-2 w-full p-2 placeholder-blue-400 rounded-md'
            />
          
          </div>          
          <div className="mb-5">
            <label htmlFor="alta" className='block text-gray uppercase font-bold'>Alta</label>
            <input 
              id='alta'
              type="date"
              className='border-2 w-full p-2 placeholder-blue-400 rounded-md'
            />
          
          </div>          
          <div className="mb-5">
            <label htmlFor="sintomas" className='block text-gray uppercase font-bold'>sintomas</label>
            <textarea 
              id='sintomas'
              placeholder='Describe los sintomas'
              className='border-2 w-full p-2 placeholder-blue-400 rounded-md'
            />
          
          </div>
          <input type="submit" 
                className='bg-indigo-400 w-full p-3 text-white uppercase font-bold hover:bg-indigo-300 cursor-pointer transition-colors'
                value="Agregar paciente"
          />
        </form>

      </div>
  );
};

export default Formulario;
