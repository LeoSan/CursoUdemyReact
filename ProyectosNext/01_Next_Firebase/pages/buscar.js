import React, {Fragment, useEffect, useState} from 'react';
import Layout from '../component/layout/Layout';
import {useRouter} from 'next/router';
import DetalleProducto from '../component/layout/DetalleProducto';
import useProductos from '../hooks/useProductos';

import Error404 from '../component/layout/404';


const buscar = () => {

const router = useRouter();
const {query:{q}} =  router; //distrochouring forma de sacar la ID que viene desde el componente 

//Todos los productos 
const { productos } = useProductos('creado');
const [resultado, setResultado] = useState([]);
const [muestraVal, setMuestraVal] = useState('');


useEffect(() => {

  const valBusqueda = q.toLowerCase();
  setMuestraVal(q.toLowerCase());
  const filtro = productos.filter(producto =>{
    return(
      producto.nombre.toLowerCase().includes(valBusqueda)
      
    )
  });
  setResultado(filtro);

}, [q, productos])



  return (
    <div>
    <Layout>
      <Fragment>
      {resultado.length === 0 ? <Error404 mensaje={`No se encontro algun valor con este patron : ${muestraVal}`}> </Error404> : (

        <div className="listado-productos">
            <div className="contenedor">
                <ul className="bg-white">
                      {resultado.map(producto =>(
                          <DetalleProducto 
                            key={producto.id}
                            producto={producto}
                          />
                      ))}
                </ul>
            </div>
        </div> )}
         </Fragment>
    </Layout>
    </div>
  )
}
 
export default buscar;

