import React, {Fragment, useState} from 'react';
import Error from './Error';
import {v4 as uuid}  from 'uuid'

const Formulario = ({guardarGasto,guardarCrearGasto}) => {

// 
const [nombre,  guardarNombre] = useState('');
const [cantidad,  guardarCantidad] = useState(0);
const [error, guardarError] = useState(false);

//funcion para guardar nombre en el state 

const defineNombre = e =>{
    guardarNombre(e.target.value);
}

const defineCantidad = e =>{
    guardarCantidad( parseInt(e.target.value) );
}

//Cuando el usuario agrega un gasto 

const agregarGasto = e => {
    e.preventDefault();

    //Vaidar 

    if (cantidad < 1 || isNaN( cantidad )  || nombre.trim() === '' ){
        guardarError(true);
        return;
    }
    guardarError(false);

    // construir el gasto 
    const gasto = {
        nombre,
        cantidad,
        id:uuid(),

    }

    console.log(gasto);

    // Pasar el gasto  al componente principal 
    guardarGasto(gasto);
    guardarCrearGasto(true);

    // resetear el form 
    guardarNombre('');
    guardarCantidad(0);





}


    return ( <Fragment>
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega  tus gastos</h2>
             {error ? <Error mensaje='Ambos campos son obligatorios' /> : null}   

            <div className='campo'>
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={defineNombre}
                />
            </div>
            <div className='campo'>
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={defineCantidad}
                />
            </div>            
            <input 
                type='submit'
                className='button-primary u-full-width'
                value="Agregar Gasto"
            />

        </form>

    </Fragment> );
}
 
export default Formulario;