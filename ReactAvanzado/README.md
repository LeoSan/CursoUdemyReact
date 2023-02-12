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

