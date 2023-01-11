import { useState, useEffect } from "react";

const MAXIMUN_COUNT = 10;
//Una manera de definir, cambiar nombre o extender Props 
interface Props{
  initialValue?:number
}

export const CounterEffect = ({initialValue = 0}:Props) => {

  const [counter, setCounter] = useState(initialValue);

  const handleClick = ()=>{
    
      setCounter(prev=> Math.min(prev + 1, MAXIMUN_COUNT) ); 
      console.log(counter);
      console.log('%c muestra console con color', 'color:red; background-color:black;');
    
  }

  // useEffect(()=>{
    
  //   return ()=>{
        
  //   }

  // },[])


  
  return (
    <>
    
    <h1>Counter: {counter}</h1>

    <button onClick={handleClick}>
        +1
    </button>
    
    </>
  )
}
