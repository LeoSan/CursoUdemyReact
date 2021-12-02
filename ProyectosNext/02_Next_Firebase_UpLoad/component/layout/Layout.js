import React, { Fragment } from 'react';
import Header from './Header';
import {Global, css } from '@emotion/core'; 
import Head from 'next/head';

const Layout = (props) => {
    return (
        <Fragment>
            <Global
                styles={css`
                    :root{
                        --gris:#3d3d3d;
                        --gris2: #6f6f6f;
                        --gris3: #e1e1e1;
                        --colorBotonA: #d1d1d1;
                        --colorBotonB: #DA552F;
                        --naranja:#DA552F;
                        --rojoError:#982707c2;
                    }

                    html{
                        font-size:62.5%;
                        box-sizing:border-box;
                    }*, *:before, *:after{
                        box-sizing:inherit;
                    }

                    body{
                        font-size:1.6rem; /**16px */
                        line-height:1.5;
                    }
                    h1,h2,h3{
                        margin:0 0 2rem 0;
                        line-height:1.5;
                    }

                    h1, h2 {
                        font-family:'Roboto Slab', serif;
                    }
                    ul {
                        list-style:none;
                        margin:0;
                        padding:0;
                    }
                    a {
                        text-decoration:none;

                    }

                
                `}
            
            />
            <Head>
                <html lang="es"/>
                <title>Proyecto Next y Firebase</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet"/>
                <link href="/static/css/app.css" rel="stylesheet"/>

            </Head>

            <Header/>
            <main>
                {props.children}
            </main>
        </Fragment>
     );
}
 
export default Layout;