import React from 'react';
import styled from '@emotion/styled';
import {primerMayuscula} from '../helper'; 

const ContenedorResumen = styled.div`
    padding:1rem;
    text-align:center;
    background-color:#00838F;
    color:#FFF;
    margin-top:1rem; 

`;

const Resumen = ({datos}) => {
    
    const {marca, year, plan} = datos;
    
    if ( marca.trim() === '' || year.trim()=== '' || plan.trim()=== '' ) return null;

    return ( 
        <ContenedorResumen>
        <h2>Resumen Cotizacion</h2>
        <ul>
            <li> Marca: {primerMayuscula(marca)}</li>
            <li> Año: {year}</li>
            <li> Plan: {primerMayuscula(plan)}</li>
        </ul>  
        </ContenedorResumen>
     );
}
 
export default Resumen;