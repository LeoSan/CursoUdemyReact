import React, {createContext,useEffect, useState} from 'react';
import axios from 'axios';



//crear el context 
export const ModalContext = createContext();

const ModalProvider = (props) =>{
    
    //State del provider 
    const [idReceta, setidReceta] = useState(null);
    const [detalleReceta, setDetalleReceta] = useState({})
    
    //una vez que tenemos una receta,llamar la APi
    useEffect(() => {
        const obtenerRecetaAPI = async ()=>{
            if (!idReceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
            const resultado  = await axios.get(url);
            setDetalleReceta(resultado.data.drinks[0]);
        }
        obtenerRecetaAPI();
        
    }, [idReceta, detalleReceta]);



    return(
        <ModalContext.Provider
            value={{
                detalleReceta,
                setidReceta, 
                setDetalleReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );

}

export default ModalProvider;