import { useState } from "react";

export const useProduct = ( onChange?:()=>void )=>{

    const [counter, setCounter] = useState(0);
   
    const increaseBy =(value:number)=>{
        setCounter(prev => Math.max(prev+value, 0)); //Forma de sumar pero en una sola linea 
    
        onChange && onChange();//Forma elegante de hacer un condicional if(onChange){}
    }
    
    return {
        counter, 
        increaseBy
    }
}
