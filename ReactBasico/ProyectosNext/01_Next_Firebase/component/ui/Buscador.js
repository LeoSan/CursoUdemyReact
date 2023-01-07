import React, {useState } from 'react';
import styled from '@emotion/styled';
import Router from 'next/router';

const InputText = styled.input`
    border:1px solid var(--gris3);
    padding:1rem;
    min-width:300px;
`;

const InputSubmit = styled.button`
    height:3rem;
    width:3rem;
    display:block;
    background-size:4rem;
    background-image:url('/static/img/buscar.png');
    background-repeat:no-repeat;
    position:absolute;
    right: 1rem;
    top:1px;
    background-color:white;
    border:none;
    text-indent:-99999;

    &:hover{
        cursor:pointer; 
    }

`;

const ContForm = styled.form`
    position:relative;
`;

const Buscar = () => {


    const [busqueda, setBusqueda] = useState();
  
    const buscarProducto = e =>{
        e.preventDefault();
        console.log("deberia-....", busqueda);

        if(busqueda.trim ==='') return;

        //redireccionar a /buscar 
        Router.push({
           pathname:'/buscar',
           query:{ q:busqueda}     
        })

    }

    return (

        <ContForm
            onSubmit={buscarProducto}
        >
            <InputText 
                type="text" 
                placeholder="Buscar Producto"
                onChange={ e=>setBusqueda(e.target.value)}
            
            />
            <InputSubmit type="submit"> </InputSubmit>
        </ContForm>

      );
}
 
export default Buscar;