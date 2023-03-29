# React PRO: Lleva tus bases al siguiente nivel
- *Profesor: Fernando Herrera*
- *Inicio: 06/01/2023*
- *Fin: *

## Sección 1: Introducción 
## Clase número 1-5:  Instalaciones recomendadas - Curso de React Pro

**Notas Comandos Github**
- `git push -u origin main` -> Permite que aqui sea el push por defecto 
- `git branch -M nuevoNombre` -> Cambia el nombre del repo raiz 

**Instalaciones Necesarias**
- Visual Studio Code
- Postman
- Mongo Compass
- Git
``` 
git config --global user.name "Tu nombre"
git config --global user.email "Tu correo"
```
- Node
- Google Chrome
**Extensiones de VSCode**
- Activitus Bar
- Configuración del Bracket Pair Colorizer 2
- Bracket Pair Colorizer 2
``` 
"bracket-pair-colorizer-2.colors": [
    "#fafafa",
    "#9F51B6",
    "#F7C244",
    "#F07850",
    "#9CDD29",
    "#0098FA"
],
``` 
**Tema que estoy usando en VSCode:**
- Tokyo Night
- Iconos
- Instalaciones adicionales
- ES7 React/Redux
- Simple React Snippets
- Auto Close Tag
- TypeScript importer
- CSS Modules
- MDX

## Sección 2: Reforzamiento sobre React 
## Clase número 6-10: Inicio de proyecto - Bases de react 

**Comandos para instalar proyecto en react**

- `npm install -g npm@9.2.0` -> Previamente se debe instalar
- `npx create-react-app@latest bases --template typescript` -> Iniciamos un proyecto especificando typescript 
> Nota: Usamos @latest ya que tenemos una version anterior de react instalada 
- Ejecutamos desde la base del proyecto `nom run start`
**Procedemos a limpiar**
> Podemos eliminar los siguientes archivos. 
- App.css
- App.text.tsx
> Podemos dejar el archivo principal limpio 
```
//App.tsx -> Es el archivo raiz 

function App() {
  return (
  <>
    <h1>React</h1>
    <hr/>
  </>
  );
}

export default App;

```
 

**Recuerda**
- La extensiones tipo `ts` son archivos typescript
- La extensiones tipo `tsx` son archivos que tienen componenetes react 


## Clase 11: Forma de trabajar PropTypes 

>Podemos iniciar, cambiar nombre o extender Props 
- Podemos crear las interfaz con los Props que deseamos 

```
import { useState } from "react";


//Una manera de definir, cambiar nombre o extender Props 
interface Props{
  initialValue?:number
}

export const Counter = ({initialValue = 0}:Props) => {

const [counter, setCounter] = useState(initialValue);

  const handleClick = ()=>{
    setCounter(prev=> prev + 1); 
    console.log(counter);
  }

  return (
    <>
    
    <h1>Counter: {counter}</h1>

    <button onClick={handleClick}>
        +1
    </button>
    
    </>
  )
}
```
## Clase 13: Optimizaciones y tipado 
> Una manera corta de destructurar dentro del estado 

```
    const [{ counter, clicks }, setCounterState] = useState<CounterState>({
      counter:initialValue,
      clicks:0,
    });
  
```

## Clase 15: Animaciones  con npm install gsap
> GSAP es un paquete de animaciones en js, solo debemos instalar e omplementar

- Paso 1: `npm install gsap`
- Paso 2: Incoporamos en nuestro componenete `import {gsap} from 'gsap'; `
- Paso 3: Leer manual ->`https://www.npmjs.com/package/gsap` 
- Paso 4: Leer manual ->`https://greensock.com/docs/v3/GSAP` 
- PAso 5: 
```
//Animación Básica
// Usando  Selector y forma directa
gsap.to('h2', { y:-10, duration:0.2, ease:'ease.out' }).then(()=>{
  gsap.to('h2', { y:0, duration:1, ease:'bounce.out' })
});


//Usando la forma correcta 
  useEffect(()=>{
    if (counter<10)return; 
    console.log('%c muestra console con color', 'color:red; background-color:black;');

      //Animación Básica
      //Controlador de video
      const timeline = gsap.timeline(); 
      timeline.to(counterElement.current, { y:-10, duration:0.2, ease:'ease.out' });
      timeline.to(counterElement.current, { y:0, duration:1, ease:'bounce.out' });

    },[counter])


```

## Clase 16: useRef y TimeLines
> Debes recordar como usar el useRef
- Paso 1: importamos en la cabecera -> `import {  useRef } from "react";`
- Paso 2: Declaramos `  const counterElement = useRef<HTMLHeadingElement>(null);`
- Paso 3: lo aplicamos donde queremos usar la referencia -> 
```
<h2 id="total" ref={counterElement}>{counter}</h2> 
``` 
- Paso 4: lo implementamos usando `current`
```
 timeline.to(counterElement.current, { y:0, duration:1, ease:'bounce.out' });
```

## Clase 17:  CustomHooks con referencias HTML

> Elevamos y mejoramos la programación usando un hooks 

```
 //Componente 
import {useCounter} from '../Hook/useCounter';


//Una manera de definir, cambiar nombre o extender Props 
interface Props{
  initialValue?:number
}

export const CounterHook = ({initialValue = 0}:Props) => {

  const {counter, counterElement, handleClick} = useCounter();
  
  return (
    <>
    
    <h1>Counter Hook</h1>
    <h2 id="total" ref={counterElement}>{counter}</h2>

    <button onClick={handleClick}>
        +1
    </button>
    
    </>
  )
}

```

```
//creamos nuestro hook
import { useState, useEffect, useRef } from "react";
import {gsap} from 'gsap'; 
const MAXIMUN_COUNT = 10;

export const useCounter = ()=>{

    const [counter, setCounter] = useState(5);
    const counterElement = useRef<HTMLHeadingElement>(null);
  
    const handleClick = ()=>{
      
        setCounter(prev=> Math.min(prev + 1, MAXIMUN_COUNT) ); 
        console.log(counter);
        console.log('%c muestra console con color', 'color:red; background-color:black;');
    }
  
    useEffect(()=>{
      if (counter<10)return; 
      console.log('%c muestra console con color', 'color:red; background-color:black;');
  
        //Animación Básica
        //Controlador de video
        const timeline = gsap.timeline(); 
        timeline.to(counterElement.current, { y:-10, duration:0.2, ease:'ease.out' });
        timeline.to(counterElement.current, { y:0, duration:1, ease:'bounce.out' });
  
      },[counter])

      
    //Lo trabajamos tipo objeto para organizar
    return {
        counter,
        counterElement,
        handleClick


    }
}
```

## Clase 18: Recomendaciones para los Hooks 

```
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import {gsap} from 'gsap'; 
const MAXIMUN_COUNT = 10;

export const useCounter = ({maxCunter = 10})=>{

    const [counter, setCounter] = useState(5);
    const alementToAnime = useRef<HTMLHeadingElement>(null);
    const tl = useRef(gsap.timeline());
  
    const handleClick = ()=>{
      
        setCounter(prev=> Math.min(prev + 1, MAXIMUN_COUNT) ); 
        console.log(counter);
        console.log('%c muestra console con color', 'color:red; background-color:black;');
    }
  

    useLayoutEffect(()=>{

      if(!alementToAnime.current)return; 
        //Animación Básica
        //Controlador de video
        tl.current.to(alementToAnime.current, { y:-10, duration:0.2, ease:'ease.out' });
        tl.current.to(alementToAnime.current, { y:0, duration:1, ease:'bounce.out' }).pause();
    },[])



    useEffect(()=>{
      tl.current.play(0);
    },[counter])

      
    //Lo trabajamos tipo objeto para organizar
    return {
        counter,
        alementToAnime,
        handleClick


    }
}
```

## Clase 19-25: Action  Creater 

**Notas**
- Si nos preguntan que patron de diseño usamos en react podemos responder `Redux` ya que podemos definir las acciones. 
- Segmentación por estados y acciones 
- 



## Sección 3: Opcional - Construcción del proyecto inicial 

## Clase 27: Inicio de proyecto 

**Recordatorios**
Pasos para crear un proyectos: 
- Paso 1: `npx create-react-app nombreApp --template typescript`
- Paso 2: `npm start`


## Clase 28: Configurar rutas tradicionales - React router V6

> Validar ya que la version Router V6 y V5 ambas trabajan de manera diferente 

**Enlace**
- https://reactrouter.com/en/main


**Instalación**
- Paso 1: Ejecutar el comando `npm install -D react-router-dom@6`
- Paso 2: podemos crear un componente usamos el comando `rafc` y esto genera un esqueleto para crear el componente


```
 import { BrowserRouter, Routes, Route, NavLink, Navigate  } from 'react-router-dom';

 import logo from '../../logo.svg';

export const Navigations = () => {
  return (
    <BrowserRouter>
        <div className='main-layout'>
            <nav>
                <img src={logo} alt='React Logo'/>
                <ul>
                    <li><NavLink to="/home"  className={({isActive})=>isActive ? 'nav-active':''}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({isActive})=>isActive ? 'nav-active':''}>About</NavLink></li>
                    <li><NavLink to="/users" className={({isActive})=>isActive ? 'nav-active':''}>User</NavLink></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/home' element={<h1>Home Page</h1>}></Route>
                <Route path='about' element={<h1>About Page</h1>}></Route>
                <Route path='users' element={<h1>User Page</h1>}></Route>
                
                <Route path='/*' element={<Navigate to="/home" replace />}></Route>
            </Routes>

        </div>    
    </BrowserRouter>
  )
}

``` 


**Notas**
- Diferencia etre el Link y NavLink 
- El `Link` es usado como una ancla 
- El `NavLink` puede determinar si esta en una ruta y colocar con un estilo si esta activo o no, o si fue consultado o no el link
 
## Sección 4: LazyLoad - Chunks - React Roter DOM V5 

## Clases:32-33-64-35-36 
**LazyLoad**
- Nos Permite cargar modulos bajo demanda. 
- Podemos decidir si cargar toda la aplicación esto con el proposito si la app es muy pesada nos facilita esta decisión.  
- LazyLoad  no es una aplicación magica, no es muy recomendable usarlo de manera descarada.
- Es util en aplicaciones mobiles para solucionar ciertos problemas. 
- La logica es que el LazyLoad llama un chunks cada vez que lo requiere. 
- Se recomienda cargar todo por modulo no por componentes 

```
En esta sección vamos a llevar nuestro sistema de rutas a otro nivel, el objetivo principal sera:

Aplicar Lazy Load en cada Componente

Aplicar Lazy Load por módulo

La idea del módulo es que nos permita cargarlo y todas sus dependencias en conjunto.
```

## Clase:38 

> en esta sección se define una mejoria en cuanto a crear componentes dinamicos 

```
import {LazyPageone, LazyPagetwo, LazyPagetree} from '../../lazyload/pages';


/* Parecido a una Clase pero no es*/
//Creamos un tipo 
interface Route {
    to:string;
    path:string;
    Component:() => JSX.Element;//Asi nombramos a los componentes
    name:string;

}

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

///System Volume Information
import { BrowserRouter, Routes, Route, NavLink, Navigate  } from 'react-router-dom';
import logo from '../../logo.svg';

//Import to  components 
import {LazyPageone, LazyPagetwo, LazyPagetree} from '../../lazyload/pages';

import { routes } from './routes'; //Forma de crear link dinamicos 

export const Navigations = () => {
  return (
    <BrowserRouter>
        <div className='main-layout'>
            <nav>
                <img src={logo} alt='React Logo'/>
                <ul>
                <li><NavLink to="/home"  className={({isActive})=>isActive ? 'nav-active':''}>Home</NavLink></li>       
                    {/*TODO: Crear  naclink dinamicos  */
                        routes.map(route =>( 

                            <li key={route.to}><NavLink to={route.to}  className={({isActive})=>isActive ? 'nav-active':''}>{route.name}</NavLink></li>
                            
                        ))
                    }
                </ul>
            </nav>
            <Routes>
                <Route path='/home'    element={<h1>Home Page</h1>}></Route>
                <Route path='lazyone'  element={ <LazyPageone/> }></Route>
                {
                    routes.map(route =>( 
                        <Route key={route.to} path={route.path} element={<route.Component/>}></Route>
                    ))
                }
                <Route path='/*' element={<Navigate to="/home" replace />}></Route>
            </Routes>

        </div>    
    </BrowserRouter>
  )
}


``` 

## Clase:39. LazyLoad y Suspense

**Forma de generar Lazy**
- Paso 1: Para definir un `lazy` debemos importarlo `import {lazy} from 'react';`
- Paso 2: Para incoporarlo debemos definilos: 
```
const Lazy1 = lazy(()=>import(/* webpackChunkName: "LazyPage1"*/'../../lazyload/pages/LazyPageone'));
const Lazy2 = lazy(()=>import(/* webpackChunkName: "LazyPage2"*/'../../lazyload/pages/LazyPagetwo'));
const Lazy3 = lazy(()=>import(/* webpackChunkName: "LazyPage3"*/'../../lazyload/pages/LazyPagetree'));
``` 
- Paso 3: Los `lazy` para usarlos debemos definir los export default 
```
import React from 'react'

export const LazyPageone = () => {
  return (
    <h1>LazyPageone</h1>
  )
}

export default LazyPageone; //<--- Se refiere a esto 
```
- Paso 4: Debemos definir la firma 
```
type JSXComponent = () => JSX.Element; 

/* Parecido a una Clase pero no es*/
//Creamos un tipo 
interface Route {
    to:string;
    path:string;
    Component: Component:React.LazyExoticComponent<JSXComponent> | JSXComponent;//Asi nombramos a los componentes cuando usamos Lazy recuerda si muestra error debes importar -> import React from 'react'; al principio del archivo donde lo estes implementando 
    name:string;

}
```

**Nota**
- Recuerda que para que funcione el Lazy debes nombrarla `01-lazyload` aun estamos pollos pero recomiendo por el momento manejarlo así. 

- Paso 5: Debemos crear un suspence 
**Notas**
- Se recomienda usar typescript 
- Suspence es un componente que usamos para embolver todo un elemento -> Suspense le indica a react que si estoy cargando un modulo debemos esperar para cargar pero mientras lo estoy cargando haz lo siguiente. 

  - Paso 5.1: debemos importar el suspence -> `import {Suspense} from 'react';` en el archivo donde se usará para este caso en esl navigator.tsx 
  - Paso 5.2: Luego suspence es un tipo de componente va envolver lo que deseas que espere, quedará asi referencia -> [ejemplo Real](./Proyectos/react-app/src/routes/Navigation.tsx)
```
//Ojo dentro del <Router> esta la estructura, solo lo coloco así para que se pueda entender el bloque y no quede tan extenso el código 
export const Navigation = () => {
  return (
    <Suspense fallback={<span>Cargando... </span>}>
      <Router>
        .....
      </Router>
    </Suspense>
  );
}
```


## Clase 40-45: 

**Notas**
- Forma de generar ruta con `react Routes v-6`
- 

```
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import {LazyPageone, LazyPagetwo, LazyPagetree} from '../../lazyload/pages';


export const LazyLayout = ()=>{

    return (

        <div>
            <h1>LazyLayout</h1>
            <ul>
                <li><NavLink to="lazy1">Lazy 1</NavLink></li>
                <li><NavLink to="lazy2">Lazy 2</NavLink></li>    
                <li><NavLink to="lazy3">Lazy 3</NavLink></li>
            </ul>

            <Routes>
                <Route path="lazy1" element={<LazyPageone/>}></Route>
                <Route path="lazy2" element={<LazyPagetwo/>}></Route>
                <Route path="lazy3" element={<LazyPagetree/>}></Route>
                <Route path="*" element={<Navigate replace to="lazy1"/>}></Route>
            </Routes>
        </div>
    )
}

export default LazyLayout;
```

## Clase 46: Forma de mejorar la importación 

- Paso 1: Debemos crar un index en la carpeta que tenemos nuestros componenetes 
- Paso 2: vamos creando el export en ese index 
```
export { LazyPage1 } from './LazyPage1';
export { LazyPage2 } from './LazyPage2';
export { LazyPage3 } from './LazyPage3';

```
- Paso 3: lo incoporamos donde deseamos 
`import { LazyPage1,LazyPage2,LazyPage3 } from '../01-lazyload/pages/index';`

## Clase 47-48-49-50: Forma de mejorar la importación 

**Comando**
- Forma de crear un estilo `rafc`

**Forma de generar un routes eficiente**
```
        <Switch>

            {/*TODO: Crear  naclink dinamicos  */
              routes.map(({path, Component}) =>( 
                <Route 
                    key={path} 
                    path={path} 
                    render={()=>{return <Component/>}}/>
                
            ))
            }
            <Redirect to={routes[0].path}/>                      
        </Switch>
```

## Clase 51-52-53-54: Nested Lazy Routes

- Podemos generar lazy por modulo para este ejemplo me fusilo el del profesor para no afectar mi desarrollo que sta 100% funcoonal 
- Lo colocare como referencia en `react-adv-lazyload-nested` -> [Ejemplo Modular](../ReactAvanzado/Proyectos/react-adv-lazyload-nested/)
- Codigo fuente completo sin compilar OJO. 


## Sección 5: Sección 5: Patrones de componentes - Compound Component Pattern 
## Clase 55-56: 

**Nota**
- Los patrones de diseño es la forma o un molde que podemos seguir para lograr crear software
- **Conozco** -> MVC 
- **Conozco** -> Redux (Estado) 
- **Conozco** -> Abstract Factory -> es un diseño que proporciona una forma de crear familias de objetos relacionados sin imponer sus clases concretas, encapsulando un grupo de fábricas individuales que tienen un tema común sin especificar sus clases concretas. usado en JAVA para microservicios
- **Conozco** -> Arquictectura Limpia -> Dominio, Aplicación, Presentación -> El proposito de este patron es que las dependencias, se organicen de forma que las capas centrales no sepan nada de las capas externas.
- **Conozco** -> Un componente de orden superior (HOC) es un patrón de diseño en React que le permite reutilizar y compartir lógica entre componentes. Los HOC no son parte de la API de React, sino un patrón que surge de la naturaleza compositiva de React. -> Higher Order Component (HOC)

> Patrones de Componentes -> Son patrones que nos daran beneficios para crear nuestros compoenentes 
- **Estudiando** -> Compound Component Pattern -> Nos ayuda armar un componente y dentro de ese componente, añadir otros componenentes y tener un control al crearlos, IONIC 