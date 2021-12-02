import React, {useContext, useState} from 'react';
import {ModalContext} from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'; 


function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
      overflow: `auto`,
    };
}

//EStilos de apariencias
 const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 500,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));




const Recetas = ({receta}) => {

    //configuraciòn del modal 
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();
    const handleOpen = ()=>{
        setOpen(true);
    }

    const handleClose =()=>{
        setOpen(false);
    }


    //Extraer los valores del context 
    const {detalleReceta, setidReceta, setDetalleReceta} = useContext(ModalContext);  
    
//Muestra y  formatea los ingredintes 
const mostrarIngredientes = detalleReceta =>{

    let ingredintes = [];
    for(let i=1; i<16;  i++){

        if(detalleReceta[`strIngredient${i}`]){
            ingredintes.push(
            <li className="list-group-item">{detalleReceta[`strIngredient${i}`]} - {detalleReceta[`strMeasure${i}`]} </li>
            ) 
        }

    }
    return ingredintes;
}

    return ( 

        <div className="col-md-4 mb-3">
            <div className="card">
                <h3 className="card-header">{receta.strDrink}</h3>
                <img className="card-img-top" src={receta.strDrinkThumb} alt={receta.strDrink}/>
                <div className="card-body">
                    <button 
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={()=>{
                            setidReceta(receta.idDrink);
                            handleOpen();
                        }}
                    >
                        Ver Receta
                    </button>
                    <Modal
                        open={open}
                        onClose={()=>{
                            setidReceta(null);
                            setDetalleReceta({});
                            handleClose();
                        }}
                    >
                        <div 
                            style={modalStyle} className={classes.paper}>
                                <h2 className="alert alert-success">{detalleReceta.strDrink}</h2>
                                <p className="alert alert-warning">
                                      Instrucciones : {detalleReceta.strInstructions}
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img width="100%" className="img-fluid my-4" src={detalleReceta.strDrinkThumb} alt={detalleReceta.strDrink} />
                                    </div>
                                    <div className="col-md-6">                                
                                        <p className="alert alert-info"> Ingredietes y cantidades </p>
                                        <ul className="list-group">
                                            {mostrarIngredientes(detalleReceta)}
                                        </ul>
                                    </div>
                                </div>

                                

                            </div>
                    </Modal>
                </div>
            </div>

        </div>
     );
}

Recetas.propTypes = {
    receta: PropTypes.object.isRequired,    
    mostrarIngredientes:PropTypes.func.isRequired, 
} 
export default Recetas;