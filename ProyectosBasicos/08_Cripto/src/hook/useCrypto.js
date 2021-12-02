import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label` 
    font-family:'Bebas Neue', cursive;
    color:#FFF;
    text-transform:uppercase;
    font-weight:bold;
    margin-top: 2rem;
    display:block; 

`;

const Select=styled.select`
    width:100%;
    display:block;
    padding:1rem;
    -webkit-appearance:none;
    border-radius:10px;
    border:none;
    font-size:1.2rem;

`;


const useCrypto = (label, opciones) => {

    //State de nuestro custom hook
    const [state, actualizarState] = useState(''); 
    
            const SelectCriptomenda = ()=>(
                    <Fragment>
                        <Label>{label}</Label>
                        <Select
                            onChange={e=>actualizarState(e.target.value)}
                            value={state}
                        >
                            <option value="MXN"> Seleccione</option>
                            {opciones.map(opcion=>(
                                <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}> {opcion.CoinInfo.FullName} </option>
                            ))}


                        </Select>
                    </Fragment>
            );

        // retornar state, interfaz y fn que modifica el state    
        return [state, SelectCriptomenda, actualizarState];         
}

export default useCrypto;


