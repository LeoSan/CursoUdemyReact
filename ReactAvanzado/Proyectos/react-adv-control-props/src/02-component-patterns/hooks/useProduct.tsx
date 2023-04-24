import { useEffect, useRef, useState } from "react";
//Importamos interfaces
import { Product, onChangeArgs } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?:(args:onChangeArgs) =>void; //forma declarar metodo
    value?:number;

}

export const useProduct = ( {onChange, product, value=0}: useProductArgs )=>{

    const [counter, setCounter] = useState(value);

    //Valido si mi componente esta siendo controlado por una fución Esto es porque estamos usando el patron control promps, recuerda un padre controla el estado de sus hijos
    const isControlled = useRef(!!onChange);//Usamos ref para no re-dibujar los componentes 
   
    const increaseBy =(value:number)=>{
        
        if (isControlled.current){
            return onChange!({count:value, product})
        }
        const newValue = Math.max(counter + value, 0)

        setCounter( newValue );
    
        onChange && onChange({ count:newValue, product });//Forma elegante de hacer un condicional if(onChange){}
    }

    //Esto permite escuchar si el value cambia y permite sincronizar de las tarjetas grandes a la pequeñas
    useEffect(()=>{
        setCounter( value );
    },[value])
    
    return {
        counter, 
        increaseBy
    }
}
