import React, {Fragment, useState, useEffect} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Listado from './componentes/Listado';


function App() {

//definir la categoria y las noticias
const [categoria, guardarCategoria] = useState('');
const [noticias, guardarNoticias]   = useState([]);



useEffect(() => {
  const consultarAPI = async()=>{
    const key = 'fdaefbb239274dfc871349611971e9d9';  
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${key}`; 
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    console.log(noticias.articles);
    guardarNoticias(noticias.articles);

  } 
  consultarAPI();
}, [categoria]); 

  return (
    <Fragment>
        <Header
          titulo ="Buscador de Noticias" />
          <div className="container white">
          <Formulario
            guardarCategoria={guardarCategoria}
          /> 

          <Listado
            noticias={noticias}
          />


          </div>  

    </Fragment>
  );
}


export default App;
