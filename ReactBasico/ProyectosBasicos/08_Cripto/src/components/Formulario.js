import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hook/useMoneda';
import useCrypto from '../hook/useCrypto';
import Axios from 'axios';
import Error from './Error';
import PropTypes from 'prop-types'; 




const Boton = styled.input`
    margin-top:20px;
    font-weight:bold;
    font-size:20px;
    padding:10px;
    background-color:#31ad1b;
    border:none;
    width:100%;
    border-radius:10px;
    color:#FFF;
    transition:background-color .3s ease;
    
    &::hover{
        background-color:#326AC0;
        cursor:pointer; 
    }

`;


const Formulario = ({setMoneda, setCriptoMoneda}) => {

    //Manejo de Error 
    const [listacripto, guardarCriptomoneda] = useState([]); 
    
    //Manejo de Error 
    const [error, setError] = useState(false); 

    //Arreglo de Monedas 
    const MONEDAS = [
        {codigo:'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo:'MXN', nombre: 'Peso Mexicano'},
        {codigo:'EUR', nombre: 'Euro'},
        {codigo:'GBP', nombre: 'Libra Esterlina'},
    ];


const [moneda,  SelectMonedas] = useMoneda('Elige Tu moneda',  MONEDAS);

//Utilicar Criptomoneda
const [cripto,  SelectCriptomenda] = useCrypto('Elige Tu Cripto',  listacripto);

//Ejecutar llamado a la API

useEffect(() => {
    const consularAPI = async () =>{
        const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
        const resultado = await Axios.get(url);
        
        guardarCriptomoneda( resultado.data.Data );

    }
    consularAPI();
}, [])

  //cuando el usuario hace submit
  const cotizarMoneda = e =>{
      e.preventDefault();
      //validar si ambos valores estan llenos 
      if ( moneda === '' || cripto === ''  ){
         setError(true);
            return;
      }
         setError(false); 
         setMoneda(moneda); 
         setCriptoMoneda(cripto);   


  }

    return (  
        <form
            onSubmit={cotizarMoneda}
        >

            {error 
            ? <Error 
                mensaje ='Campos obligatorios.'
             /> :null
             }
            <SelectMonedas/>
            <SelectCriptomenda/>
            <Boton
                type="submit"
                value="Calcular"
            />
            
        </form>

    );
}
Formulario.propTypes = {
    setMoneda: PropTypes.func.isRequired,    
    setCriptoMoneda: PropTypes.func.isRequired,    
   } 
export default Formulario;