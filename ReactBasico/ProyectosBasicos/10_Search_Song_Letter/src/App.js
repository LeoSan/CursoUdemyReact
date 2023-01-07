import React, {Fragment, useEffect, useState} from 'react';
import Formulario from './components/Formulario'; 
import Cancion from './components/Cancion'; 
import Informacion from './components/Informacion'; 
import axios from 'axios';


function App() {

  //Definir el state
  const [buscarCancion, setBucarCancion] = useState({});
  const [letra, setLetra] = useState('');
  const [informacion, setInformacion] = useState({});

  useEffect(() => {

    if (Object.keys(buscarCancion).length === 0)return; 
    
    const consultarAPILetra = async ()=> {
      
        const {artista, cancion} = buscarCancion;
        
        const url  = `https://api.lyrics.ovh/v1/${artista}/${cancion}`; 
        const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
        
      const [letra, informacion] = await Promise.all([
        axios(url), 
        axios(url2), 
      ]);
        //Guardamos Letra 
        setLetra(letra.data.lyrics);
        setInformacion(informacion.data.artists[0]);
        

    }
    consultarAPILetra();

  }, [buscarCancion, informacion])

  return (
        <Fragment>
           <Formulario
            setBucarCancion={setBucarCancion}
           />
          <div className="container mt-5">
              <div className="row">
                  <div className="col-md-6">
                      <Informacion
                        informacion = {informacion}
                      />
                  </div>
                  <div className="col-md-6">
                    <Cancion
                      letra={letra}
                    />
                  </div>
              </div>
          </div> 
        </Fragment>
    );
}

export default App;
