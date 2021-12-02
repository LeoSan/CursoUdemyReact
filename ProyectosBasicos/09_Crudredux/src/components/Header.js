import React from 'react';
//Mosca aqui es la nueva forma de crear link
import {Link } from 'react-router-dom';
const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justifi-content-between">
            <div className="container">
                <h1> <Link to={'/'} className="text-light">CRUD - REACT - REDUX - RESST API & Axios</Link> </h1>
            </div>

            <a href="/producto/nuevo"
                className="btn btn-danger nuevo-post d-block d-md-inline-block">Agregar Producto &#43; </a>
        </nav>
      );
}
 
export default Header;

