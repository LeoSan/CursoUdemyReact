import React from 'react';
import PropTypes from 'prop-types'; 

const Clima = ({resultado}) => {
    //extraer valores 
    const {name, main} = resultado;
    
    if(!name) return null; 

    //Grados Kelvin 
    const Kelvin = 273.15; 
    let gradoTotal = parseFloat(main.temp - Kelvin, 10).toFixed(2); 

    let gradoMaxima = parseFloat(main.temp_max - Kelvin, 10).toFixed(2); 
    let gradoMinima = parseFloat(main.temp_min - Kelvin, 10).toFixed(2); 

    return ( 
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>El Clima de {name} es: </h2>
                <p className="temperatura">
                    {gradoTotal} <span> &#x2103; </span>
                </p>
                <p>Temp. Máxima:&nbsp;&nbsp; 
                    {gradoMaxima} <span> &#x2103; </span>
                </p>
                <p>Temp. Mínima: &nbsp;&nbsp;
                    {gradoMinima} <span> &#x2103; </span>
                </p>


            </div>

        </div>
     );
}

Clima.propTypes = {
 resultado: PropTypes.object.isRequired,    
}
export default Clima;