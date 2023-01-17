# React PRO: Lleva tus bases al siguiente nivel
- *Profesor: Fernando Herrera*
- *Inicio: 06/01/2023*
- *Fin: *

## Sección 1: Introducción 
## Clase número 1-5:  Instalaciones recomendadas - Curso de React Pro


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




## Clase :  

## Sección 3: Opcional - Construcción del proyecto inicial





 
