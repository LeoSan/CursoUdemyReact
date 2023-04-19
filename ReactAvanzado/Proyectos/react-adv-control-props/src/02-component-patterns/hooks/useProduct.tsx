import { useState } from "react";
//Importamos interfaces
import { Product, onChangeArgs } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?:(args:onChangeArgs) =>void; //forma declarar metodo

}

export const useProduct = ( {onChange, product}: useProductArgs )=>{

    const [counter, setCounter] = useState(0);
   
    const increaseBy =(value:number)=>{
        const newValue = Math.max(counter + value, 0)

        setCounter( newValue );
    
        onChange && onChange({ count:newValue, product });//Forma elegante de hacer un condicional if(onChange){}
    }
    
    return {
        counter, 
        increaseBy
    }
}
