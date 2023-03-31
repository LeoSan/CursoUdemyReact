import {lazy, LazyExoticComponent} from 'react';
import {LazyPageone, LazyPagetwo, LazyPagetree} from '../../lazyload/pages';

import {NoLazy} from '../../lazyload/pages/NoLazy';


type JSXComponent = () => JSX.Element; 

/* Parecido a una Clase pero no es*/
//Creamos un tipo 
interface Route {
    to:string;
    path:string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;//Asi nombramos a los componentes
    name:string;

}

const LazyLayout = lazy(()=>import(/* webpackChunkName: "LazyLayout"*/'../../lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        to:   '/LazyLayout',
        path: '/LazyLayout/*',
        Component: LazyLayout,
        name:'LazyLayout-Dasboard'
    } ,{
        to:   '/nolazy',
        path: 'nolazy',
        Component: NoLazy,
        name:'nolazy'
    }, 

]