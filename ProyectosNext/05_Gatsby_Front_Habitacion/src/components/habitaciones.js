import React from 'react';
import {graphql} from 'gatsby';
import Layout from './layout';
import Image from 'gatsby-image';



// Nota: caso super importante es la manera de hacerlo dinamicamente esto $slug viene
// desde aqui -> hotelgatsby/gatsby-node.js  del node desarrollado 
export const query = graphql`
    query($slug: String!) {
        allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
            nodes {
                    titulo
                    contenido
                    image {
                    fluid(maxWidth:1200) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
    `; 


const HabitacionesTemplate = ( { data: { allDatoCmsHabitacion: { nodes } }}) => {

    const {titulo, contenido, image } = nodes[0];

    return ( 
         <Layout>
             <main className="contMain">
                <h1 className="tituloHabitacion">{titulo}</h1>
                <p>{contenido}</p>
                <Image fluid={image.fluid} />
            </main>
         </Layout>
     );
}
 
export default HabitacionesTemplate;