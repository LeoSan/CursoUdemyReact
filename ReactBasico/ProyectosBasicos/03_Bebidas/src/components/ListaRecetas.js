import React, {useContext} from 'react';
import Receta from './Recetas';

import {RecetasContext} from '../context/RecetasContext'
import PropTypes from 'prop-types'; 

const ListaRecetas = () => {
    //Extraer la Recetas
    const {Recetas} = useContext(RecetasContext);
    
    return ( 

            <div className="row mt-5">
                {Recetas.map(receta => (
                     <Receta
                        key={receta.idDrink}
                        receta={receta}
                     />  
                ))}

            </div>

     );
}

ListaRecetas.propTypes = {
    Recetas: PropTypes.object.isRequired,    
} 
export default ListaRecetas;