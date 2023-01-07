import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Axios from 'axios';
import Spiner from './components/Spiner';


const Contenedor = styled.div`
    max-width:900px;
    margin: 0 auto;
    @media (min-width:992px){
      display:grid;
      grid-template-columns:repeat(2, 1fr);
      column-gap:2rem;
    }          
`;

const Imagen = styled.img`
    max-width:80%;
    margin-top:5rem;

`;

const Heading = styled.h1`
    font-family:'Bebas Neue', cursive;
    color:#FFF;
    text-align:left;
    font-weight:700;
    font-size:30px;
    margin-bottom:50px;
    margin-top:80px;
  &::after{
    content:'';
    width:100;
    height: 6px;
    background-color:#a7fe66;
    display:block;    
  }



`;


function App() {

 const [moneda, setMoneda] = useState('');
 
 const [criptoMoneda, setCriptoMoneda] = useState('');
 
 const [cotizacion, setCotizacion] = useState('');

 const [cargando, setCargando] = useState(false);

 useEffect(() => {
  
  //Evitamos la ejecuciòn 
  if(moneda === ''){
     return;
   }

   console.log('Cotizando...');
   const cotizarMoneda = async () =>{
      //consultar  API para tener la contizaciòn
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
      const resultado = await Axios.get(url);
      
      //Mostrar Spiner
      setCargando(true);
      //Ocultar Spiner

      setTimeout(()=>{
        setCargando(false);
        //Guardar Cotizacion
        console.log(resultado.data.DISPLAY[criptoMoneda][moneda]);
        setCotizacion(resultado.data.DISPLAY[criptoMoneda][moneda]);
  
      }, 4000);

   }

   cotizarMoneda();
 }, [moneda, criptoMoneda]);


//Mostrar spiner o resultado 

  const componente = (cargando) ? <Spiner/>  : <Cotizacion cotizacion = {cotizacion} />;

  return (
     <Contenedor>
        <div>
            <Imagen
              src={imagen}
              alt="Imagen Criptomonedas"

            />
        </div>
        <div>
            <Heading>Cotiza tus Monedas Virtuales</Heading>
            <Formulario
                setMoneda={setMoneda} 
                setCriptoMoneda={setCriptoMoneda} 
            />
            {componente}
        </div>


     </Contenedor> 
  );
}

export default App;
