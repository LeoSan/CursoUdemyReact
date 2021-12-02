import React from 'react';
import styled from '@emotion/styled';

const ContFrase = styled.div`
    padding: 3rem; 
    border-radius:.5rem;
    background-color:#fff; 
    max-width:800px;
    
    @media(min-width:992px){
        margin-top:20rem; 
    }

    h3{
        font-family:Arial, Helvetica, sans-serif;
        text-align:center;
        position:relative;
        padding-left:4rem;
       
        &::before{
            content: open-quote;
            font-size:10rem;
            color:black;
            position:absolute;
            left: -1rem; 
            top: -2rem; 
        }
    }
    
     p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size:1.4rem;
        font-weight:bold;
        text-align:right; 
        color:#666;
        margin-top:2rem; 

     }

`; 


const Frase = ({frase}) => {
    
  //Forma de validar si un objeto tiene informaciìn adentro   
  //  if ( Object.keys(frase).length === 0 ){ return null; }
    
    return ( 
        
        <ContFrase>
            <h3>{frase.quote}</h3>
            <p>{frase.author}</p>
        </ContFrase>
     );
}
 
export default Frase;
            
