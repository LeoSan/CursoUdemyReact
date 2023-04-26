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