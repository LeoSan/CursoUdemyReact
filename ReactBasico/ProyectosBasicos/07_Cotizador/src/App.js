import React, {useState} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'
import Spiner from './components/Spiner'
import styled from '@emotion/styled'; 

const Contenedor = styled.div`
    max-width:600px;
    margin:0 auto; 
`;

const ContenedorFormulario = styled.div`
    background-color:#FFF;
    padding:3rem;
`; 

function App() {

  const [resumen, guardarResumen] = useState({});
  const {datos, cotizacion} = resumen;

  const [cargando, guardarCargando] = useState(false);


  return (
      <Contenedor>
        <Header titulo='Cotizador de Seguros'/>
        <ContenedorFormulario>
            <Formulario
                guardarResumen={guardarResumen}
                guardarCargando = {guardarCargando}
            />
            {cargando ? (<Spiner/>): null}

            
            {datos ? (<Resumen
                  datos ={datos}
            />) : null}

            {!cargando ? 
               (
                <Resultado
                cotizacion ={cotizacion}
              />
  
               ) 
               : null   
            }   
            
        </ContenedorFormulario>
      </Contenedor>
  );
}

export default App;
