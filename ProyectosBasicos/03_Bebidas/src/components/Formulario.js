import React, {useContext, useState} from 'react';

import {CategoriaContext} from '../context/CategoriaContext'; 
import {RecetasContext} from '../context/RecetasContext'; 
import PropTypes from 'prop-types'; 

const Formulario = () => {

 
 //crear el state de context 
    const {categorias} = useContext(CategoriaContext);

    const {setBusquedaRecetas, setConsultar} = useContext(RecetasContext);

    const [busqueda, guardarBusqueda] = useState({
        nombre:'',
        categoria:'',
    });  
    
    //funcion para leer los datos
    const obntenerDatosReceta = e =>{
        guardarBusqueda({
            ...busqueda,
           [e.target.name] : e.target.value
        });
    }


    return ( 
           <form
                className="col-12"
                onSubmit={ e => {
                    e.preventDefault();
                    setBusquedaRecetas(busqueda);
                    setConsultar(true);
                }}
           >
               <fieldset>
                   <legend className="text-center">
                       Buscar Bebidas por categoria.
                   </legend>
               </fieldset>
               <div className="row mt-4">
                    <div className="col-md-4">
                        <input
                            name="nombre"
                            className="form-control"
                            type="text"
                            placeholder="Buscar por Ingrediente"
                            onChange={obntenerDatosReceta}

                        />
                    </div> 
                    <div className="col-md-4">
                        <select
                          className="form-control"
                          name="categoria"
                          onChange={obntenerDatosReceta}

                        >
                              <option value="" > -- Selecciona -- </option>  
                                {categorias.map(categoria =>(
                                     <option 
                                        key={categoria.strCategory}
                                        value={categoria.strCategory}
                                         >{categoria.strCategory}</option>     
                                    
                                ))}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input
                            type="submit"
                            className="btn btn-block btn-primary"
                            value ="Buscar Bebidas "
                        />

                    </div>
               </div> 

           </form>

     );
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,    
}
export default Formulario;