import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types'; 

const ResultadoDiv = styled.div`
    color:#FFF; 
    font-family:Arial, Helvetica, sans-serif;
    background-color:#7634df30;
    border-radius:10px;
    border:1px solid #FFF;
    margin-top:15px;
    padding: 15px;

`;

const Info = styled.p`
    font-size:18px;
    span{
        font-weight:bold; 
    }

`;

const Precio = styled.p`
    font-size:30px;

    

`;


const Cotizacion = ({cotizacion}) => {
    
    if (Object.keys(cotizacion).length === 0) return null;
    
    return ( 
        <ResultadoDiv>
            <Precio>El Precio es: <span>{cotizacion.PRICE}</span> </Precio>
            <Info>El Precio max: <span>{cotizacion.HIGHDAY}</span> </Info>
            <Info>El Precio min: <span>{cotizacion.LOWDAY}</span> </Info>
            <Info>Variaciòn ùltimas 24 Horas: <span>{cotizacion.CHANGEPCT24HOUR}</span> </Info>
            <Info>Ultimas ACTUALIZACIÓN: <span>{cotizacion.LASTUPDATE}</span> </Info>
        </ResultadoDiv>

     );
}


Cotizacion.propTypes = {
    cotizacion: PropTypes.object.isRequired,    
   }
export default Cotizacion;