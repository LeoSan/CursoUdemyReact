import React, { Fragment } from 'react';
import Layout from '../component/layout/Layout';

const CrearCuenta = () => (
  <div>
    <Layout>
    <Fragment>
      <h1>Crear Cuenta</h1>
      <form>
        <div>
            <label htmlFor="nombre">Nombre</label>
            <input
                type="text"
                id="nombre"
                placeholder="Tu nombre"
                name="nombre"
            />

        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                placeholder="Tu email"
                name="email"
            />

        </div>   
        <div>
            <label htmlFor="pass">Contreseña</label>
            <input
                type="password"
                id="pass"
                placeholder="Tu Contraseña"
                name="pass"
            />

        </div>    

          <input type="submit" value="Crear Cuenta "/>   
      </form>
      

      </Fragment>
    </Layout>
  </div>
)
 
export default CrearCuenta;

