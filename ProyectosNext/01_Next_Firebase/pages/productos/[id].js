import React, {useEffect, useState, useContext, Fragment} from 'react';
import {useRouter} from 'next/router';

import Layout from '../../component/layout/Layout'; 
import {FirebaseContext} from '../../firebase';
import Error404 from '../../component/layout/404';
//ESto es para generar estilos dinamicos 
import styled from '@emotion/styled';

//Manejo de fechas 
import formatoFecha from 'date-fns/formatDistanceToNow'; 
import {es} from 'date-fns/locale'; 
//Traigo del componente UI disenios 
import {Campo, InputSubmit} from '../../component/ui/Formulario';
import Boton from '../../component/ui/Boton';

import Loading from '../../component/layout/loading';



const ContenidoProducto = styled.div`
    @media(min-width:768px){
        display:grid;
        grid-template-columns:2fr 1fr;
        column-gap:2rem;
    }
`; 

const CreadorProducto = styled.p`
    padding: .5rem 2rem; 
    background-color:#DA552F;
    color:#fff;
    text-transform:uppercase; 
    font-weight: bold; 
    text-align:center; 
    display:inline-block; 

`; 


const Productos = () => {
    //State del componente 
    const [producto, setProducto]     = useState({});
    const [error, setError]           = useState(false);
    const [comentarioState, setComentario] = useState({});
    const [consultarBD, setConsultarBD] = useState(true);


    //Rounting para obtener el id actual
    const router = useRouter();

    const {query:{id}} =  router; //distrochouring forma de sacar la ID que viene desde el componente 

    //context de firebase 
    const {firebase, usuario} = useContext(FirebaseContext);
    
    //Obtengo el producto usando useEffect  
    useEffect(() => {
        if (id && consultarBD){
            const obtenerProducto = async () =>{
                const productoQuery = await firebase.db.collection('productos').doc(id);
                const producto  = await productoQuery.get();
                if ( producto.exists ){
                    console.log(producto.data());
                    setProducto(producto.data());
                    setConsultarBD(false);
                }else{
                    setError(true);
                    console.log('No Existe');
                    setConsultarBD(false);
                }
                
            } 
            obtenerProducto();
        }
       
    }, [id]); 

    //Forma para poner un loading en la pagina 
    if (Object.keys(producto).length === 0 && !error ) return 'Cargando...';

    const cargandoGif = () => {
        if (Object.keys(producto).length === 0 && !error ){
            return true;
        }
    }

    
    const { comentario, creado, descripcion,  empresa, nombre, url, urlimagen, votos, creador, havotado} = producto;


    //adminitracion de los votos 
    const votarProducto =() => {
        console.log("votando");

        if (!usuario){
            return router.push('/');
        }

        //obtener y sumar un nuevo votos
        const nuevoTotal = votos + 1; 

        //Validar si ha votado 
        if ( havotado.includes(usuario.uid) ) return;
        
        //actualizar la BD 
        const nuevoVotado = [...havotado, usuario.uid]
        //actualizar el state
        
        setProducto({
            ...producto,
            votos:nuevoTotal,
        })

        
        //actualizar en la BD  
        firebase.db.collection('productos').doc(id).update({votos:nuevoTotal, havotado:nuevoVotado});

      //Este metodo es para evitar una falla de iteracion en el useEffect 
      setConsultarBD(true);
    }   

    //Funcion para almacenar los comentarios 
    const comentarioOnChnage=(e)=>{
        setComentario({
            ...comentarioState, 
           [e.target.name]:e.target.value
        })
    
    }

//identificar si el comentario es del creador 

    const esCreador = (id)=>{
        if (creador.id === id){
            return true;
        }

    }

    const agregarComentario = (e)=>{
        e.preventDefault();
        if (!usuario){
            return router.push('/');
        }
        //informacion extra al comentario, 
        comentarioState.usuarioId = usuario.uid; 
        comentarioState.usuarioNombre = usuario.displayName;
        comentarioState.fechaComentario = Date.now();

        //tomar copias comentario y los arreglamos a la matriz 
        const nuevosComentarios = [...comentario, comentarioState ]; 

        //ACtualizar BD
        firebase.db.collection('productos').doc(id).update({comentario:nuevosComentarios});

        //Actualizar state 
        setProducto({
            ...producto,
            comentario:nuevosComentarios,
        })
        
        //Este metodo es para evitar una falla de iteracion en el useEffect 
        setConsultarBD(true);
    }

    //funcion del creador del producto. 
    const puedeBorrar = ()=>{
        if (!usuario){
            return false;
        }
        if ( creador.id === usuario.uid ){
            return true;

        }
    }

    //Ejemplo de eliminar producto con firebase: 
    const eliminarProducto = async ()=>{
       try {
            if (!usuario ){
                return router.push('/login');
            }   
            if ( creador.id !== usuario.uid ){
                return router.push('/');
    
            }

            await firebase.db.collection('productos').doc(id).delete();
            router.push('/');
       } catch (error) {

            console.log("Error en Firebase -> ", error);
           
       } 
    }

    return (
        
            <Layout>
                <Fragment>
                    {error ? <Error404 mensaje="No hay producto."> </Error404> : (
                    <div className="contenedor">
                        <h1 className="tituloProducto">{nombre}</h1>
                        <ContenidoProducto>
                            <div>
                            <p>Publicado: {formatoFecha( new Date(creado), {locale:es})}</p>
                            <p>Publicado por: {CredentialsContainer.nombre} de la empresa: {empresa}</p> 

                            <img className="imgenProducto" src={urlimagen} />   
                            <p>{descripcion}</p>
                          
                               {usuario && (
                                   <Fragment>
                                     <h2>Agrega tu comentario</h2>
                                     <form
                                        onSubmit={agregarComentario}
                                        >
                                         <Campo>
                                             <input
                                                 type="text"
                                                 name="mensaje"
                                                 onChange={comentarioOnChnage}
                                             />
                                 
                                         </Campo>
         
                                         <InputSubmit type="submit" value="Agregar comentario "/>   
                                    </form>
                                    </Fragment>
                               )} 

                                <h2>Comentarios</h2>
                                { console.log(comentario) }
                                { comentario.length === 0? "Aún no hay comenarios." : (
                                        <ul className="listCuadro">
                                        { comentario.map((listComentario, i) =>(

                                            <li  className="listCuadro"
                                                key={`${listComentario.usuarioId}-${i}`}>
                                                <p>Publicado: {formatoFecha( new Date(listComentario.fechaComentario), {locale:es})}</p>
                                                <p>Comentario: {listComentario.mensaje} </p>
                                                <p>Escrito por: 
                                                    <span className="tituBold">
                                                         {' '}
                                                         {listComentario.usuarioNombre} 
                                                    </span>
                                                    </p>
                                                    {esCreador(listComentario.usuarioId) && <CreadorProducto>Es Creador</CreadorProducto>}
                                            </li>
                                        ))}
                                        </ul>
                                )}
                            </div>
                            <aside>
                                <Boton
                                    target="_blank"
                                    bgColor="true"
                                    href={url}
                                >Visitar Url</Boton>
                                {usuario && (
                                    <Boton onClick={votarProducto}>Votar</Boton> 
                                )}
                                
                                
                                <p>Votos: {votos}</p>
                            </aside>
                        </ContenidoProducto>
                        { puedeBorrar() && 
                            <Boton
                              onClick={eliminarProducto}
                            >Eliminar Producto</Boton> 
                        }

                    </div>
                    )}
               
                </Fragment> 
            </Layout>
        
     );
}
 
export default Productos;