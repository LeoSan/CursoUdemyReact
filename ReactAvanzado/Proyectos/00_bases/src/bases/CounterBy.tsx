import { useState } from "react";


//Una manera de definir, cambiar nombre o extender Props 
interface Props{
  initialValue?:number// El signo interrogación permite opcional 
}

interface CounterState{ // Es una forma de crear una especie de estructura para pasar Props
  counter:number;
  clicks:number;
}

export const CounterBy = ({initialValue = 5}:Props) => {

    const [{ counter, clicks }, setCounterState] = useState<CounterState>({
      counter:initialValue,
      clicks:0,
    });
  
    const handleClick = (value:number)=>{
    
    setCounterState(prev => ({
      counter: prev.counter + value,
      clicks : prev.clicks +1
    })); 

  }

  return (
    <>
    
    <h1>CounterBy: {counter}</h1>
    <h1>Click: {clicks}</h1>

    <button onClick={()=>handleClick(1)}> +1 </button>
    <button onClick={()=>handleClick(5)}> +5 </button>
    
    </>
  )
}
