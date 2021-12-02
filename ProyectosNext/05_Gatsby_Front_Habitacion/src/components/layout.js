import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Helmet from 'react-helmet';
import useSeo from '../hook/useCeo';

import {Global, css} from '@emotion/core'; 

const Layout = (props) => {

    const seo = useSeo();
    const {  fallbackSeo: { description, title } } = seo;

    return ( 
        <Fragment>
            <Global
                styles={css`
                   html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    body {
                        font-size: 18px;
                        font-size: 1.8rem;
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }
                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1, h2 {
                        font-family: 'Roboto', serif;
                    }
                    h3 {
                        font-family: 'PT Sans', sans-serif;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding:0;
                    }
                `}
            />


            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:400,700&display=swap" rel="stylesheet" />
                <link href="/static/css/global.css" rel="stylesheet"/>

            </Helmet>
            <Header/>
            {props.children}
            <Footer titulo = {title}/>
        </Fragment>
     );
}
 
export default Layout;