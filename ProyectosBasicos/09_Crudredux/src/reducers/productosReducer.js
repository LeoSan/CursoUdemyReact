import {AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_EXITO, AGREGAR_PRODUCTO_ERROR, COMENZAR_DESCARGA_PRODUCTOS, DESCARGA_PRODUCTOS_EXITO, DESCARGA_PRODUCTOS_ERROR, OBTENER_PRODUCTOS_ELIMINAR, PRODUCTOS_ELIMINADO_EXITO, PRODUCTOS_ELIMINADO_ERROR, OBTENER_PRODUCTOS_EDITAR, PRODUCTOS_EDITAR_EXITO, PRODUCTOS_EDITAR_ERROR} from '../types';

//Cada reducer tiene su propio state 

const initialState ={
    productos:[], 
    error:false, 
    loading:false,
    productoeliminar:null,
    productoeditar:null, 
}
 export default function (state=initialState, action){
     switch(action.type){
        case AGREGAR_PRODUCTO: 
            return{
                ...state,
                loading:action.payload, 

            }
        case AGREGAR_PRODUCTO_EXITO: 
            return{
                ...state,
                loading:false, 
                productos:[...state.productos, action.payload]
                
            }
        case PRODUCTOS_EDITAR_ERROR:    
        case PRODUCTOS_ELIMINADO_ERROR:
        case DESCARGA_PRODUCTOS_ERROR:                
        case AGREGAR_PRODUCTO_ERROR: 
            return{
                ...state,
                loading:false, 
                error:[action.payload]
                
            }  
        case COMENZAR_DESCARGA_PRODUCTOS: 
            return{
                ...state,
                loading:action.payload, 
            }
        case DESCARGA_PRODUCTOS_EXITO:
            return{
                ...state, 
                loading: false,
                error:null,
                productos:action.payload,
            }
        
        case OBTENER_PRODUCTOS_ELIMINAR:
            return{
                ...state, 
                productoeliminar:action.payload, 

            }
            case PRODUCTOS_ELIMINADO_EXITO: 
                return{
                    ...state, 
                    productos:state.productos.filter(producto => producto.id !== state.productoeliminar),
                    productoeliminar:null
                }
        case OBTENER_PRODUCTOS_EDITAR: 
                return{
                    ...state, 
                    productoeditar: action.payload, 
                    
                }   
        case PRODUCTOS_EDITAR_EXITO: 
          return{
              ...state,
              productoeditar:null,
              productos: state.productos.map( producto =>
                producto.id === action.payload.id ?  producto = action.payload : producto
              ) 
          }                                                            
         default:
             return state;
     }
 }