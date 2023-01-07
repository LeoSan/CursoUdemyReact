import React, { Fragment } from 'react';
import Layout from '../component/layout/Layout';
import DetalleProducto from '../component/layout/DetalleProducto';
import useProductos from '../hooks/useProductos';
import Error404 from '../component/layout/404';


const Home = () => {
  
  const { productos } = useProductos('creado');

  return(
    <div>
    <Layout>
     
      {productos.length === 0 ? <Error404 mensaje="No hay productos cargados."> </Error404> : (
        <Fragment>   
            <div className="listado-productos">
                <div className="contenedor">
                    <ul className="bg-white">
                          {productos.map(producto =>(
                              <DetalleProducto 
                                key={producto.id}
                                producto={producto}
                              />
                          ))}
                    </ul>
                </div>
            </div>
         </Fragment>
      )}
    </Layout>
  </div>

  )
}
export default Home;

