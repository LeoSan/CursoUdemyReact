import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({setBusqueda}) => {
    
    const [termino, setTermino] = useState('');
    const [error, setError] = useState(false);

   const buscarImagenes = e =>{
       e.preventDefault();

       //validar

       if (termino.trim() === ''){
            setError(true);
            return;
       }
       //Si todoesta bien simplemente limpiamos el mensaje de error 
       setError(false);

       //enviar el termino 
       setBusqueda(termino);


   }

    
    return ( 
        <form
            onSubmit={buscarImagenes}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Buscar imagen ejemplo: comida "
                        onChange={e =>setTermino(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>                

            </div>
            {error ? <Error mensaje="Debes agregar un termino"/>: null }
        </form>

     );
}

Formulario.propTypes={
    setBusqueda:PropTypes.func.isRequired, 
}
 


export default Formulario;