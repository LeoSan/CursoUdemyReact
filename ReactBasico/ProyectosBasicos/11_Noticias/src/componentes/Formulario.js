import React from 'react';
import styles from "./Formulario.module.css"
import useSelect from '../Hooks/useSelect';
import PropTypes from 'prop-types'

const Formulario = ({guardarCategoria}) => {
   
    //Crear opciones 

    const OPCIONES = [
        {value:'general',       label:'General'},
        {value:'business',      label:'Negocios'},
        {value:'entertainment', label:'Entretenimiento'},
        {value:'science',       label:'Ciencia'},
        {value:'health',        label:'Salud'},
        {value:'sports',        label:'Desportes'},
        {value:'technology',    label:'Tecnologias'},
    ];


     //Utilizar custom hooks 
     const [categoria, SelecNoticias] = useSelect('general', OPCIONES);
     
     //Submit al form, pasar noticias a app.js
     const buscarNoticias = e => {
        e.preventDefault();
        console.log("envio .... ");
        guardarCategoria(categoria);

     }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset.m2">
                <form 
                    onSubmit={buscarNoticias}
                >
                    <h3 className={styles.heading}>Encuentra Noticias por Categorías</h3>
                    <SelecNoticias/>

                    <div className="input-field col s12">
                            <input
                                type="submit"
                                className={`${styles['btn-block']} btn-large amber darken-4`}
                                value="Buscar"
                            />
                    </div>
                </form>    
            </div>   
        </div>

     );
}


Formulario.propTypes={
    guardarCategoria : PropTypes.func.isRequired, 
  }
  
 
export default Formulario;