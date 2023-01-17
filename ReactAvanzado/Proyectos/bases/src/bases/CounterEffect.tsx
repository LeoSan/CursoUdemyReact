import { useState, useEffect, useRef } from "react";
import {gsap} from 'gsap'; 


const MAXIMUN_COUNT = 10;
//Una manera de definir, cambiar nombre o extender Props 
interface Props{
  initialValue?:number
}

export const CounterEffect = ({initialValue = 0}:Props) => {

  const [counter, setCounter] = useState(initialValue);
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

  
  return (
    <>
    
    <h1>Counter Effect</h1>
    <h2 id="total" ref={counterElement}>{counter}</h2>

    <button onClick={handleClick}>
        +1
    </button>
    
    </>
  )
}
