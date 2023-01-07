import React, { Fragment } from 'react';
import {css} from '@emotion/core'
import Navegacion from '../components/navegacion';
import styled from '@emotion/styled'; 
import { Link } from 'gatsby';


const EnlaceHome = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`;

const Header = () => {
    return ( 
        <Fragment>
              <header
                    css={css`
                        background-color: rgba(102,163,191);
                        padding: 1rem;
                    `}
             >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;
                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
                    >

                            <EnlaceHome to='/'> <h1>Hotel Gatsby</h1>   </EnlaceHome>
                           
                           <Navegacion />
                    </div> 
               </header>
        </Fragment>
     );
}
 
export default Header;