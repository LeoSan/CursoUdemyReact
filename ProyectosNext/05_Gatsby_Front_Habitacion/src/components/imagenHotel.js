import React, {Fragment} from 'react';
import  {graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageFondo = styled(BackgroundImage)`
    height:700px;

`;

const TextoImagen = styled.div`
    background-image:linear-gradient(to top, rgba(34, 49, 63, .8), rgba(34, 49, 63, .9));
    color:#FFF;
    height:100%;
    display:flex;
    flex-direction:column;
    flex:1;
    align-items:center;
    justify-content:center;

    h1{
        font-size:4rem;
        margin:0%;

        @media(min-width:992px){
            font-size:5.8;
        }
    }

    p {
        font-size:2rem;
        @media(min-width:992px){
            font-size:2.6;
        }

    }

`;


const ImagenHotel = () => {

    const {image } = useStaticQuery(graphql`
    query{
        image:file(relativePath:{eq:"8.jpg"}){
          sharp:childImageSharp{
            fluid{
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `) 
    return ( 
        <Fragment>
        <ImageFondo tag="section"  fluid={image.sharp.fluid} fadeIn="soft">

        <TextoImagen>
            <h1>Bienvenido</h1>
            <p>Super Hotel </p>
        </TextoImagen>

        </ImageFondo>

        </Fragment>
     );
}
 
export default ImagenHotel;
