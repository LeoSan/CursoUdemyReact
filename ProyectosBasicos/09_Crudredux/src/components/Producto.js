import React from 'react';
import {useHistory} from 'react-router-dom';

//iportamos libreria para el alert 
import Swal from 'sweetalert2';

//Actions de Redux 
import { useDispatch } from 'react-redux'; 
import {borrarProductoAction, obtenerProductoEditar} from '../actions/productoActions';


const Producto = ({producto}) => {

    const {nombre, precio, id} = producto;
    //utilizar use dispatch y re crea una funcion   
    const dispatch = useDispatch();

    //Forma de enviar usando useHistory 
    const history = useHistory();// 

    //confirmar si desea elimiar el producto
    const confirmarEliminarProducto = id => {
        //Preguntar al usuario 
        Swal.fire({
            title: '¿Esta seguro de eliminar este producto?',
            text: "...",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText:'Cancelar',
          }).then((result) => {
            if (result.value) {

                 //Pasalor al accion 
                dispatch(borrarProductoAction(id));

            }
          })        
    }

    //funcion que redirige de una forma mas programada
    const redireccionarEdiccion = producto =>{
        dispatch(obtenerProductoEditar(producto));
        history.push(`/producto/editar/${producto.id}`)
    }


    return (  
        <tr> 
            <td>{nombre}</td>
            <td> <span  className="font-weight-bold">$ {precio}</span></td>
            <td className="acciones">
                <button 
                      type="button"
                      onClick={()=>redireccionarEdiccion(producto)}
                      className="btn btn-primary mr-2">

                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={()=>confirmarEliminarProducto(id)}
                >
                    Eliminar 
                </button>
            </td>
        </tr> 

    );
}
 
export default Producto;