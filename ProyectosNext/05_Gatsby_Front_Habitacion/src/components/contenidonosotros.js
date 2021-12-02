import React, {Fragment} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import styled from '@emotion/styled'; 


import Imagen from 'gatsby-image';



const Contenido = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3rem;
    }
    p {
        line-height: 2;
        margin-top: 2rem;
    }
`;

const Contenidonosotros = () => {
    const informacion = useStaticQuery(graphql`
            query {
                allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
                    nodes {
                    titulo
                    contenido
                    imagen {
                        fluid (maxWidth: 1200) {
                        ...GatsbyDatoCmsFluid
                        }
                    }
                    }
                }
            }
        `); 

        const {titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0]; 
        console.log(informacion.allDatoCmsPagina.nodes[0]);
    return ( 
        <Fragment>
            <h2 className="tituloPage">{titulo}</h2>
            <Contenido>
                <p>{contenido}</p>
                <Imagen fluid={imagen.fluid}></Imagen>

            </Contenido>
        </Fragment>


     );
}
 
export default Contenidonosotros;