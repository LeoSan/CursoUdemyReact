import React, {Fragment, useEffect} from 'react'
import Producto from './Producto';
//Actions de Redux 
import { useDispatch, useSelector } from 'react-redux'; 
import {obtenerProductosActions} from '../actions/productoActions';



const Productos = () => {

        //utilizar use dispatch y re crea una funcion   
        const dispatch = useDispatch();
        useEffect(() => {
       
         //Consulta la API 
        const cargarProductos = ()=> dispatch( obtenerProductosActions() ); 
            cargarProductos();
            // eslint-disable-next-line 
        }, []); 
        

        //Acceder al state del sotre 
        const productos  = useSelector(state => state.productos.productos); 
        const error      = useSelector(state => state.productos.error); 
        const cargando   = useSelector(state => state.productos.loading); 

    return ( 
        <Fragment>
            <h2 className="text-center my-5">Listado de Productos</h2>
            {error ? <p className="alert alert-danger p2">HuboError</p>: null}
            {cargando ? <p>Cargando...</p>: null}
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.length=== 0 ? 'No hay Productos' : (
                        productos.map(producto=>(
                            <Producto 
                                key={producto.id}
                                producto={producto}
                            />
                        ))
                    ) }
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default Productos;
