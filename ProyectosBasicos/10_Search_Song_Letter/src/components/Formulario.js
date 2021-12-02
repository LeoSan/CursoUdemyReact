import React, {useState} from 'react';
import Error from './Error'; 


const Formulario = ({setBucarCancion}) => {

    //State para el formulario 
    const [busqueda, setbusqueda] = useState({
        artista:'',
        cancion:'',
    });
    

    //UseState Para los errores 
    const [error, setError] = useState(false); 

    
    //Forma para pasar variables a loscampos 
    const {artista, cancion } = busqueda;
    
    //Agregar funcion leer campos 
    const actualizarState = e =>{
        setbusqueda({
            ...busqueda,
            [e.target.name] : e.target.value,
        })
    }

//consular las APIs

const buscarInformacion = e =>{
    e.preventDefault();

    if (artista.trim() === '' || cancion.trim() === ''  ){
        setError(true);
        console.log("entro aqui");
        return;     
    }
    //Si todo Bien limpiar Error 
    setError(false);     
    //Consultar Api 
    console.log("entro alla");
    setBucarCancion(busqueda);

}

    return ( 
        <div className="bg-info">

            {(error)? <Error mensaje="Debe Ingresar ambos valores"/> : null }   

            <div className="container">
                <div className="row">
                     

                    <form 
                        onSubmit={buscarInformacion}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2">
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Astista:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="artista"
                                                placeholder="Nombre Artista"
                                                onChange={actualizarState}
                                                value={artista}
                                            />
                                        </div>         

                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                            <label>Canciones:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="cancion"
                                                placeholder="Nombre Cancion"
                                                onChange={actualizarState}
                                                value={cancion}
                                            />
                                        </div> 

                                
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary float-right">Buscar</button>
                        </fieldset>
                    </form>   
                </div>    
            </div>    
        </div>

     );
}
 
export default Formulario;