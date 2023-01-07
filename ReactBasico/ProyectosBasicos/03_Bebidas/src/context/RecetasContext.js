import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
export const RecetasContext = createContext();



const RecetasProvider = (props) => {
    
    const [Recetas, setRecetas] = useState([]);

    const [consultar, setConsultar] = useState(false);

    const [busqueda, setBusquedaRecetas] = useState({
        nombre:'',
        categoria:'',
    })
    
  const {nombre, categoria} = busqueda;


    useEffect(() => {

        if( consultar ){
            const  obteneRecetas = async()=>{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`; 
    
               const resultado = await axios.get(url);
              // console.log(resultado.data.drinks);
              setRecetas(resultado.data.drinks);
    
             }  
             obteneRecetas(); 
        }


    }, [busqueda])
    


    return ( 
           <RecetasContext.Provider
            value={{
                Recetas, 
                setBusquedaRecetas, 
                setConsultar
            }}
           >
               { props.children }
           </RecetasContext.Provider> 

     );
}
 
export default RecetasProvider;

