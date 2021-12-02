import {AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_EXITO, AGREGAR_PRODUCTO_ERROR, COMENZAR_DESCARGA_PRODUCTOS, DESCARGA_PRODUCTOS_EXITO, DESCARGA_PRODUCTOS_ERROR, OBTENER_PRODUCTOS_ELIMINAR, PRODUCTOS_ELIMINADO_EXITO, PRODUCTOS_ELIMINADO_ERROR, OBTENER_PRODUCTOS_EDITAR, PRODUCTOS_EDITAR_EXITO, PRODUCTOS_EDITAR_ERROR, COMENZAR_EDITAR_PRODUCTO} from '../types';
//Importamos axios
import clienteAxios from '../config/axios'
//Importamos plugin de alertas 
import Swal from 'sweetalert2';

export function crearNuevoProductoAction(producto) {
    return async (dispatch)=>{

        dispatch( agregarProducto(true) );

        try {
            //Insertar en la API 
           await clienteAxios.post('/productos', producto);
            //Si todo sale bien actualizamos el state 
            dispatch( agregarProductoExito(producto) );
            //Alerta //Codigo nuevo 
            Swal.fire(
                'Correcto',
                'El productos se agrego correctamente',
                'success',
            );
            //Codigo nuevo 

        } catch (error) {
            console.log(error);
            //Si hay un error cambiar el state 
            dispatch( agregarProductoError(true) );
                        //Alerta //Codigo nuevo 
                        Swal.fire({
                            icon:'error',
                            title:'Hubo un problema',
                            text:'Hubo un problema, por favor intenta de nuevo.',
                            }
                        );
                        //Codigo nuevo 
            
        }
        
    }
}

const agregarProducto = (valor) =>({
    type:AGREGAR_PRODUCTO,
    payload:valor,
});

const agregarProductoExito = (producto) =>({
    type:AGREGAR_PRODUCTO_EXITO,
    payload:producto,
});

const agregarProductoError = (valor) =>({
    type:AGREGAR_PRODUCTO_ERROR,
    payload:valor,
});

//funcion que descarga los productos 

export function obtenerProductosActions() {
    return async(dispatch) =>{
        dispatch (descargarProductos());

        try {

            //Obtenemos los valores de  la bd.jsom
            const respuesta = await clienteAxios.get('/productos');
            console.log(respuesta.data);
            
            //Cambiamos sus state 
            dispatch (descargarProductosExito(respuesta.data));
            
        } catch (error) {
            console.log(error);
            dispatch (descargarProductosError());
            
        }

    }
}

const descargarProductos = () =>({
    type:COMENZAR_DESCARGA_PRODUCTOS,
    payload:true 
});

const descargarProductosExito = (productos) =>({
    type:DESCARGA_PRODUCTOS_EXITO,
    payload:productos, 
});

const descargarProductosError = () =>({
    type:DESCARGA_PRODUCTOS_ERROR,
    payload:true 
});



//Borrar Producto
export function borrarProductoAction(id) {
    return async(dispatch) =>{
        dispatch (obtenerProductoEliminar(id));

        try {
            const resultado = await clienteAxios.delete(`/productos/${id}`); 
            console.log(resultado.data);
            dispatch(eliminarProductoExito());

            //Si se elimina muestra el alert
            Swal.fire(
                'Elminado!',
                'Producto Eliminado.',
                'success'
              )

        } catch (error) {
            console.log(error);
            dispatch(eliminarProductoError());
        }
    }
}

const obtenerProductoEliminar = id =>({
    type:OBTENER_PRODUCTOS_ELIMINAR, 
    payload:id
});

const eliminarProductoExito = () =>({
    type:PRODUCTOS_ELIMINADO_EXITO, 
});

const eliminarProductoError = () =>({
    type:PRODUCTOS_ELIMINADO_ERROR, 
    payload:true,
});


//Colocar producto en Edicion 

export function obtenerProductoEditar(producto){
    return( dispatch )=>{
        dispatch(obtenerProductoAction(producto));

    }
}

const obtenerProductoAction = producto =>({
    type:OBTENER_PRODUCTOS_EDITAR, 
    payload:producto, 
});


//eDITAR EL REGISTRO EN EL API 
export function editarProductoAction(producto){
    return async ( dispatch )=>{
        dispatch(editarProducto());

        try {
             clienteAxios.put(`/productos/${producto.id}`, producto);
             dispatch(editarProductoExito(producto));
            
        } catch (error) {
            console.log(error);
            dispatch(editarProductoError());
        }

    }
}

const editarProducto = () =>({
    type:COMENZAR_EDITAR_PRODUCTO, 
    
});

const editarProductoExito= producto =>({
    type:PRODUCTOS_EDITAR_EXITO,
    payload:producto,
    
});

const editarProductoError= () =>({
    type:PRODUCTOS_EDITAR_ERROR,
    payload:true,
    
});

