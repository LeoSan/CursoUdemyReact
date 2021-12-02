import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './componente/Frase';


const Contenedor  = styled.div` 
    display:flex;
    align-items:center; 
    padding-top:5rem;
    flex-direction:column;

`;


const Boton  = styled.button` 
   background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
   background-size:300px;
   font-family:Arial, Helvetica, sans-serif,Arial, Helvetica, sans-serif;
   color:#fff;
   margin-top:3rem;
   padding:1rem 3rem;
   border: 2px solid black; 
   transition:background-size.3s ease;

   :hover{
     cursor:pointer;
     background-size:400px;

   }

`;



function App() {

 //Usar estado 

 const [frase, guardarFrase] = useState({});

  //Usar Efect 

  useEffect (()=>{
    consultarApi()
  }, []);




    /* Se puede hacer asi     
    const consultarApi = ()=>{
          
          const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
          const frase = api.then (respuesta => respuesta.json());
          frase.then (resultado => console.log(resultado));
    }
    */

    /*    o Asì */
    const consultarApi = async ()=>{
        
          const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
          const frase = await api.json();
          console.log(frase[0]);
          guardarFrase(frase[0]);
    }
    



  return (
     <Contenedor>
        <Frase
            frase = {frase}
        />

        <Boton 
          onClick = {consultarApi}
        >   are you feel evil ?     
        </Boton>
    </Contenedor>
  );
}

export default App;
