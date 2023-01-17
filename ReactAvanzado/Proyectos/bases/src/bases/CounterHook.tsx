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
