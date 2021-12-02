import React, { Fragment, useState } from 'react';
import Router from 'next/router';
import Layout from '../component/layout/Layout';
import {Formulario, Campo, InputSubmit, FormH1, Error} from '../component/ui/Formulario';



import firebase from '../firebase';


//Validaciones 
import useValidacion from '../hooks/useValidacion'; 
import validarCrearCuenta from '../validacion/validarCrearCuenta'; 

const STATE_INICIAL = {
  nombre:'',
  email:'',
  pass:'', 
}

const CrearCuenta = () => {

  const [error, guardarError] = useState(false);

  const { valores, errores, submitForm, handleChange, handleSubmit, handleBlur } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta );

  const {nombre, email, pass} = valores; 

  async function crearCuenta(){
    //console.log("creando cuenta... ");
    try {
        await  firebase.registrar(nombre, email, pass);  
        Router.push('/');
    
    } catch (error) {
      
      console.log(error.message); // ojo ese message es por el api de firebase esto cambia si se usa otras apis 
      guardarError(error.message);
    }

  } 

  return(
    <div>
      <Layout>
      <Fragment>
        <FormH1>Crear Cuenta</FormH1>
        <Formulario
          onSubmit={handleSubmit}
          noValidate
        >
          <Campo>
              <label htmlFor="nombre">Nombre</label>
              <input
                  type="text"
                  id="nombre"
                  placeholder="Tu nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
              />
  
          </Campo>

          {errores.nombre && <Error>{errores.nombre}</Error>}

          <Campo>
              <label htmlFor="email">Email</label>
              <input
                  type="email"
                  id="email"
                  placeholder="Tu email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}

              />
  
          </Campo>

          {errores.email && <Error>{errores.email}</Error>}

          <Campo>
              <label htmlFor="pass">Contreseña</label>
              <input
                  type="password"
                  id="pass"
                  placeholder="Tu Contraseña"
                  name="pass"
                  value={pass}
                  onChange={handleChange}
                  onBlur={handleBlur}

              />
  
          </Campo> 
          {errores.pass && <Error>{errores.pass}</Error>}   
          
          {error && <Error>{error}</Error>}   
  
            <InputSubmit type="submit" value="Crear Cuenta "/>   
        </Formulario>
        
  
        </Fragment>
      </Layout>
    </div>
  )
}
 
export default CrearCuenta;

