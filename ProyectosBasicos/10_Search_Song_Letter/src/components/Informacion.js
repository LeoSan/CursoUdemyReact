import React, {Fragment} from 'react';
const Informacion = ({informacion}) => {
    
    if (Object.keys(informacion).length === 0)return null; 
    
    const {strArtistThumb, strGenre, strBiographyES,strFacebook,strTwitter, strLastFMChart} = informacion; 
    return ( 
            <Fragment>
            <div className="card border-light">
                <div className="card-header bg-primary text-light font-weight-bold">
                    Informaciòn del artista
                </div>
                <div className="card-body">
                    <img src={strArtistThumb} alt="Logo del Artista" />
                    <p className="card-text">Genero: {strGenre}  </p>
                    <h2 className="card-text">Biografía:</h2>
                    <p className="card-text"> {strBiographyES}  </p>
                    <p className="card-text"> 
                        <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                        </a>
                        <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                        </a>
                        <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                        </a>                    
                    
                    </p>
                </div>

            </div>
            </Fragment>
     );
}
 
export default Informacion;