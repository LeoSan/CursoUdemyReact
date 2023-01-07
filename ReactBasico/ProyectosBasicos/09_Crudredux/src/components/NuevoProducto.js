import React, {useState} from 'react';
//Actions de Redux 
import { useDispatch, useSelector } from 'react-redux'; 
import {crearNuevoProductoAction} from '../actions/productoActions';
import {mostrarAlertaAction, ocultarAlertaAction} from '../actions/alertActions';



const NuevoProducto = ({history}) => {
       //sate del componente 
       const [nombre, guardarNombre] = useState('');
       const [precio, guardarPrecio] = useState(0);
        
        //utilizar use dispatch y re crea una funcion   
        const dispatch = useDispatch();


        //Acceder al state del sotre 
         const cargando = useSelector(state => state.productos.loading); 
         const error    = useSelector(state => state.productos.error); 
         const alerta    = useSelector(state => state.alerta.alerta); 
         
        //mandar llamar el action de productoAction 
        const agregarProducto = (producto)=> dispatch( crearNuevoProductoAction(producto) )
    
        //cuando el usuario realice el submoit 
        const eventoNuevoProducto = e=>{
            e.preventDefault();
            
            //validar formulario 
            if (nombre.trim() === '' || precio <=0){
                
                const alerta = {
                    msg:'ambos campos son obligatorios',
                    class: 'alert alert-danger text-center text-uppercase p3', 
                }

                dispatch(mostrarAlertaAction(alerta));
                return; 

            }

            // si no hay erroresn 
            dispatch(ocultarAlertaAction(alerta));

            //crear el nuevo producto
            agregarProducto({
                nombre, precio
            });
            //redireccionar 
            history.push('/');
        }


    return (
        <div className="row justify-content-center">
            
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold"> Agregar Nuevo Producto  </h2>

                            {alerta ? <p className={alerta.class}>{alerta.msg}</p> : null}

                        <form
                            onSubmit={eventoNuevoProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e=>guardarNombre(e.target.value)}

                                 />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value={precio}
                                    onChange={e=>guardarPrecio(Number(e.target.value))}
                                    
                                    
                                 />
                            </div>   
                            <button type="submit"                         
                                    className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                Agregar
                            </button>
                        </form>
                        {cargando ? <p>Cargando...</p>: null}
                        {error ? <p className="alert alert-danger p2">huboError</p>: null}
                    </div>

                </div>
            </div>    
        </div>
     );
}
 
export default NuevoProducto;
