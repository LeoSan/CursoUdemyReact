import React, {Fragment, useState} from 'react';
import {v4 as uuid}  from 'uuid'
import PropTypes from 'prop-types';


const Formulario = ({crearCita}) => {
    //Crear State de Citas 
    const [cita, actualizarCita] = useState ({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:'',     

    });

    const [error, actualizarError] = useState(false);

    // funcion que se ejecuta cada vez que un usuario escribe en un  input 
    const actualizarState = e =>{
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    //Extraer Valores 
    const {mascota, propietario,fecha, hora, sintomas} = cita;

    //Cuando el usuario presiona agregar cita 
    const submitCita = e =>{
        e.preventDefault(); 
        //Validar 

        if ( mascota.trim() === ''  || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''   ){
            actualizarError(true);
            return;
        }
        //Eliminar el mensaje previo 
        actualizarError(false);


        //Asignar un Id -> react necesita un key 
        cita.id=uuid();

        //Crear Cita 
        crearCita(cita);

        //Reiniciar el form  ->  Se reinicia porque se le puso el value a los input y se creo la union de objeto linea 25

        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:'',  
        });

    }

    
    return ( 
        <Fragment>
            <h2>Crear Citas</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> :null}
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className="u-full-width"
                    placeholder='Nombre Mascota'
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className="u-full-width"
                    placeholder='Nombre Dueño Mascota'
                    onChange={actualizarState}
                    value={propietario}
                />                
                <label>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                    
                />                
                <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                    
                />     
                <label>Sìntomas</label>
                <textarea
                    name='sintomas'
                    className="u-full-width"
                    onChange={actualizarState}
                    value={sintomas}
                > </textarea>                            
                <button 
                    type="submit"
                    className="u-full-width button-primary"
                    onChange={actualizarState}
                > 
                Agregar Cita 
                </button>

            </form>


        </Fragment>
     );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;