import {lazy, LazyExoticComponent} from 'react';
import {LazyPageone, LazyPagetwo, LazyPagetree} from '../../lazyload/pages';


type JSXComponent = () => JSX.Element; 

/* Parecido a una Clase pero no es*/
//Creamos un tipo 
interface Route {
    to:string;
    path:string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;//Asi nombramos a los componentes
    name:string;

}

const Lazy1 = lazy(()=>import(/* webpackChunkName: "LazyPage1"*/'../../lazyload/pages/LazyPageone'));
const Lazy2 = lazy(()=>import(/* webpackChunkName: "LazyPage2"*/'../../lazyload/pages/LazyPagetwo'));
const Lazy3 = lazy(()=>import(/* webpackChunkName: "LazyPage3"*/'../../lazyload/pages/LazyPagetree'));

export const routes: Route[] = [
    {
        to:   '/lazy-1',
        path: 'lazy-1',
        Component: LazyPageone,
        name:'Lazy-1'
    },{
        to:   '/lazy-2',
        path: 'lazy-2',
        Component: LazyPagetwo,
        name:'Lazy-2'
    },{
        to:   '/lazy-3',
        path: 'lazy-3',
        Component: LazyPagetree,
        name:'Lazy-3'
    }, 

]