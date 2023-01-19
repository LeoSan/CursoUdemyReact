import {useCounter} from '../Hook/useCounter';


//Una manera de definir, cambiar nombre o extender Props 
interface Props{
  initialValue?:number
}

export const CounterHook = ({initialValue = 0}:Props) => {

  const {counter, alementToAnime, handleClick} = useCounter({maxCunter:15});
  
  return (
    <>
    
    <h1>Counter Hook</h1>
    <h2 id="total" ref={alementToAnime}>{counter}</h2>

    <button onClick={handleClick}>
        +1
    </button>
    
    </>
  )
}
