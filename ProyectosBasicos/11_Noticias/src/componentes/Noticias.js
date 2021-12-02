import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Formulario.module.css"

const Noticias = ({noticia}) => {
    const {urlToImage, url, title,description,sourse} = noticia; 
    
    const imagen = (urlToImage)? 
        <div className="card-image">
        <img src={urlToImage} alt="{title}" />
        <span className="card-litle">{sourse}</span>
        </div>
    : null;
    return ( 
    
        <div className="col s12 m6 l4">
            <div className="card">

                {imagen}
               
                <div className="card-content">
                    <span className={styles.tituloNoti}>{title}</span>  
                    <p>{description}</p>
                </div> 
                <div className="card-action">
                   <a 
                   href={url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="waves-effect waves-light btn">ver completo</a>     
                </div>  
            </div>   

        </div>
    
    );
}

Noticias.propTypes={
    noticia: PropTypes.object.isRequired, 
  }

export default Noticias;