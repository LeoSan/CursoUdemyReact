import React, { Fragment, useContext } from 'react';
import Buscardor from '../ui/Buscador';
import Navegacion from './Navegacion';
import Link from 'next/link';

import styled from '@emotion/styled';
import {css} from '@emotion/core';


import Boton from '../ui/Boton';

import {FirebaseContext} from '../../firebase';//Codigo nuevo 

const ContHeader = styled.div`
    max-width: 1200px;
    width:95%;
    margin:0 auto;
    @media (min-width:768px){
        display:flex;
        justify-content:space-between;
    }
`;


const ContenedorHeader = styled.div`
        border-bottom: 2px solid black;
        padding:1rem 0; 
`;

const Logo = styled.p`
    color:var(--naranja); 
    font-size:4rem;
    line-height:0;
    font-weight:700;
    font-family:'Roboto Slab', serif; 
    margin-right:2rem;
    
`;

const ContUsuBoton = styled.div`
        display:flex;
        align-items:center;
`;

const ContNomUsu = styled.div`
        margin-right:2rem;
`;


const ContLog = styled.div`
    display:flex;
    align-items:center;

`;

const Header = () => {

    const {usuario, firebase} =  useContext(FirebaseContext);

    return ( 

        <ContenedorHeader>
            <ContHeader>
                <ContLog>
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>
                        <Buscardor/>
                        
                        <Navegacion/>
           
                </ContLog>
                <ContUsuBoton>
                   
                   {usuario ? (
                       <Fragment>

                   <ContNomUsu>Hola, {usuario.displayName}</ContNomUsu>
                        <Boton
                        bgColor="true"
                        onClick={()=>firebase.cerrarSesion}
                        >Cerrar Sesión </Boton>

                       </Fragment>
                   ) : (

                    <Fragment>

                        <Link href="/login">
                        <Boton
                        bgColor="true"
                        >Login</Boton>
                        </Link>
                        <Link href="/crear-cuenta">
                        <Boton>Crear Cuenta</Boton>
                        </Link>
                           
                    </Fragment>



                   )}
                   
                   

                   

                </ContUsuBoton>
            </ContHeader>

        </ContenedorHeader>

     );
}
 
export default Header;