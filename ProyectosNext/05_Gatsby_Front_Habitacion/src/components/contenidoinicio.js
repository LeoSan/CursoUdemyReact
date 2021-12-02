import React, { Fragment } from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Imagen from 'gatsby-image';

import styled from '@emotion/styled'; 

const TextoInicio = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr) ;
        column-gap: 2rem;
    }
    p {
        line-height: 2;
        
    }
`;


const Contenidoinicio = () => {
    const informacion = useStaticQuery(graphql`
        query {
            allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
                nodes {
                titulo
                contenido
                imagen {
                    fluid {
                    ...GatsbyDatoCmsFluid
                    }
                }
                }
            }
        }
    `); 

    
    const {titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0]; 
    //console.log(informacion.allDatoCmsPagina.nodes[0]);
    
    return ( 
        <Fragment>
            <h2 className="tituloPage">{titulo}</h2>
            <TextoInicio>
                <p>{contenido}</p>
                <Imagen fluid={imagen.fluid}></Imagen>

            </TextoInicio>
        </Fragment>
     );
}
 
export default Contenidoinicio;