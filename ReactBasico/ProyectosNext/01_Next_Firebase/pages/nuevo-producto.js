import React, { Fragment, useState,useContext } from 'react';
import Error404 from '../component/layout/404';
import Router, {useRouter} from 'next/router';
import Layout from '../component/layout/Layout';
import {Formulario, Campo, InputSubmit, FormH1, Error} from '../component/ui/Formulario';

//Importar file-uplader
import FileUpLoader from 'react-firebase-file-uploader';

import {FirebaseContext} from '../firebase';



//Validaciones 
import useValidacion from '../hooks/useValidacion'; 
import validarNuevoProducto from '../validacion/validarNuevoProducto'; 

const STATE_INICIAL = {
  nombre:'',
  empresa:'',
  imagen:'', 
  url:'',
  descripcion:'',  
}

const NuevoProducto = () => {

  //state para el file 
  const [nombreImagen, setImagen] = useState('');
  const [subieno, setSubiendo]    = useState(false);
  const [progreso, setProgreso]   = useState(0);
  const [urlimagen, setUrlImagen]    = useState('');

  const [error, guardarError] = useState(false);

  const { valores, errores, submitForm, handleChange, handleSubmit, handleBlur } = useValidacion(STATE_INICIAL, validarNuevoProducto, crearProducto );

  const {nombre, empresa, url, descripcion} = valores; 

 //hook de routing para redireccionar 
   const router = useRouter();

  //Context con las operaciones de CRUD de firebase
  const {usuario,firebase} = useContext( FirebaseContext );

  async function crearProducto(){
    console.log("crearProducto... ");
    
    //Si el usuario no esta autenticado
    if(!usuario){
      return router.push('/login');
    }

    //Crear objeto del producto 
    const producto = {
      nombre,
      empresa,
      urlimagen,
      url,
      descripcion, 
      votos:0,
      comentario:[],
      creado:Date.now(),
      creador:{
        id:usuario.uid,
        nombre:usuario.displayName,
      },
      havotado:[]

    }
    //insertar en la base de datos. 
    firebase.db.collection('productos').add(producto); //Creo mi tabla producto y agrego un nuevo producto 
    return router.push('/');
  }
  

  //Metodo para file 
 const handleUploadStart = () =>{
    setProgreso(0);
    setSubiendo(true);
  }
  
  const handleProgress = progress =>{
    setProgreso({progress});
  }

  const handleUploadError = error => {
    setSubiendo(error);
    console.error(error);
  }

  const handleUploadSuccess = imagen => {
    setProgreso(100);
    setSubiendo(false);
    setImagen(imagen);
    firebase
      .storage
      .ref("productos")
      .child(imagen)
      .getDownloadURL()
      .then(url=> {
          console.log(url); 
          setUrlImagen(url)
        } );
  }



  return(
    <div>
      <Layout>

        { !usuario ? <Error404 mensaje="No tienes acceso."> </Error404> :( 
            <Fragment>
                <FormH1>Nuevo Producto </FormH1>
                <Formulario
                  onSubmit={handleSubmit}
                  noValidate
                >

                  <fieldset>
                        <legend>Informaciòn General</legend>  
                      
                      <Campo>
                          <label htmlFor="nombre">Nombre</label>
                          <input
                              type="text"
                              id="nombre"
                              placeholder="Nombre producto"
                              name="nombre"
                              value={nombre}
                              onChange={handleChange}
                              onBlur={handleBlur}
                          />
              
                      </Campo>

                      {errores.nombre && <Error>{errores.nombre}</Error>}

                      <Campo>
                          <label htmlFor="empresa">Empresa</label>
                          <input
                              type="text"
                              id="empresa"
                              placeholder="Nombre Empresa"
                              name="empresa"
                              value={empresa}
                              onChange={handleChange}
                              onBlur={handleBlur}
                          />
              
                      </Campo>

                      {errores.empresa && <Error>{errores.empresa}</Error>}

                      <Campo>
                          <label htmlFor="imagen">Imagen</label>
                          <FileUpLoader
                              accept="imagen/*"
                              id="imagen"
                              name="imagen"
                              randomizeFilename
                              storageRef={firebase.storage.ref("productos")}
                              onUploadStart={handleUploadStart}
                              onUploadError={handleUploadError}
                              onUploadSuccess={handleUploadSuccess}
                              onProgress={handleProgress}
                          />
                      </Campo>

                      {errores.imagen && <Error>{errores.imagen}</Error>}          


                      <Campo>
                          <label htmlFor="url">Url</label>
                          <input
                              type="url"
                              id="url"
                              name="url"
                              placeholder="Url del producto"
                              value={url}
                              onChange={handleChange}
                              onBlur={handleBlur}
                          />
              
                      </Campo>

                      {errores.url && <Error>{errores.url}</Error>}
                  </fieldset>          

                  <fieldset>
                    <legend>Sobre tu Producto</legend>
                      <Campo>
                            <label htmlFor="descripcion">Descripcion</label>
                            <textarea
                                id="descripcion"
                                name="descripcion"
                                value={descripcion}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                
                        </Campo>

                      {errores.descripcion && <Error>{errores.descripcion}</Error>}        
                  </fieldset>
         
                  {error && <Error>{error}</Error>}   
  
                   <InputSubmit type="submit" value="Crear Producto "/>   
            </Formulario>
        
  
        </Fragment>
        )}
      </Layout>
    </div>
  )
}
 
export default NuevoProducto;

