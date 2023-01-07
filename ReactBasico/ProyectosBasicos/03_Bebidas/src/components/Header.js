import React from 'react';
import PropTypes from 'prop-types'; 

const Header = ({titulo}) => {
    return ( 
        <header className="bg-alert">
            <h1>{titulo}</h1>
        </header>
     );
}
Header.propTypes = {
    titulo: PropTypes.string.isRequired,    
} 
export default Header;