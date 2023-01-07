import React, {useContext} from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';


import {FirebaseContext} from '../../firebase';//Codigo nuevo 

const ContNav = styled.nav`
    padding-left:2rem;
    a {
        font-size:1.8rem;
        margin-left:2rem;
        color:var(--gris2);
        font-family:'Roboto Slab', serif; 

        &:last-of-type{
            margin-right:0;
        }
    }
`;


const Navegacion = () => {

    const {usuario} =  useContext(FirebaseContext);
    return ( 
        <ContNav>
            <Link href="/">Inicio</Link> 
            <Link href="/populares">Populares</Link> 
            {usuario && (
                <Link href="/nuevo-producto">Nuevo Producto</Link> 
            )}
        </ContNav>

     );
}
 
export default Navegacion;