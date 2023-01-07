import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';


// Crear el context  
export const CategoriaContext = createContext(); 

// Se debe crear un provider de manera obligatoria 

const CategoriaProvider = (props)=>{

    const [categorias, guardarCategorias] = useState([]);

    

    
    //Ejecutar el llamdo al API
    useEffect(() => {
         
        const consultarCategoriaAPI = async() =>{
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const categorias = await  axios.get(url); 
            
            guardarCategorias(categorias.data.drinks);
        } 


        consultarCategoriaAPI(); 

    }, [])



      return(
        <CategoriaContext.Provider
            value={{
                categorias 
            }}
        >
            {props.children}
        </CategoriaContext.Provider>   
      )  


}

export default CategoriaProvider;