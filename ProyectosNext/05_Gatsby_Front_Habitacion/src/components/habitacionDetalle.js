import React, { Fragment } from 'react';
import Image from 'gatsby-image';
import styled from '@emotion/styled'; 

import { Link } from 'gatsby';

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62,80,.85);
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`;


const HabitacioDetalle = ({habitacion}) => {
    
    const {contenido, imagen, titulo, slug} = habitacion; 

    return ( 
        
        <Fragment>
            <div className="contHabitaciones">
                <Image fluid={imagen.fluid} />

                <div className="contHabitacionesDeta"> 
                    <h3>{titulo}</h3>  
                    <p>{contenido}</p>

                    <Boton to={slug}>Ver Habitación</Boton>
                </div>    
            </div>
        </Fragment>

     );
}
 
export default HabitacioDetalle;