import React, {useState, useEffect} from 'react';
import Formulario from './component/Formulario';
import ListadoImagenes from './component/ListadoImagenes';

function App() {
  
const [busqueda, setBusqueda] = useState('');
const [imagenes, setimagen] = useState([]);


//Variables para elpaginador 
const [paginActual, setPaginActual] = useState(1);
const [totalPagina, setTotalPagina] = useState(1);


useEffect(() => {

 const consultarAPI = async ()=>{
    if (busqueda === ''){
      return;
    }

    const imagenPorPagina = 30; 
    const key= '17314130-176e6d534b80f9d88f86137c3';
    const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenPorPagina}&page=${paginActual}`; 
    const respuesta  = await fetch(url); 
    const resultado = await respuesta.json();
    
    setimagen(resultado.hits);
    console.log(resultado);

    //calcula eltotal de paginas 
    const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenPorPagina );
    setTotalPagina(calcularTotalPaginas);
    
    //mover la pagina hacia arriba 
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.scrollIntoView({behavior:'smooth'});

 }
 
 consultarAPI();
  
}, [busqueda, paginActual])

//definir la pagina anterior 
const paginaAnterior = () =>{
  const nuevaPaginaActual = paginActual - 1; 
  
  if ( nuevaPaginaActual  === 0   ) return;
  
  setPaginActual(nuevaPaginaActual);
}

const paginaSiguiente = ()=>{
  const nuevaPaginaActual = paginActual + 1; 
  
  if (nuevaPaginaActual > totalPagina  ) return;
  
  setPaginActual(nuevaPaginaActual);

  

}


  return (

    <div className="container">
      <div className="jumbotron alert-info">
        <p className="lead text-center">Buscador de Imagenes </p>
        <Formulario
          setBusqueda={setBusqueda}
        />   
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes
          imagenes = {imagenes}
        />

        { (paginActual === 1)? null :
        
        (
          <button 
          type="button"
          className="bbtn btn-info mr-1"
          onClick={paginaAnterior}>
           &laquo; Anterior 
          </button>

        )
        }


        {(paginActual === totalPagina)? null :(

            <button 
            type="button"
            className="bbtn btn-info"
            onClick={paginaSiguiente}>
              Siguiente &raquo;
            </button>
        ) }


      </div>
    </div>

  );
}

export default App;
