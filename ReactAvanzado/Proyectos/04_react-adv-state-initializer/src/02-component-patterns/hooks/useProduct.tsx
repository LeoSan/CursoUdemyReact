import { useEffect, useRef, useState } from "react";
//Importamos interfaces
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?:(args:onChangeArgs) =>void; //forma declarar metodo
    value?:number;
    initialValues?:InitialValues;

}

export const useProduct = ( {onChange, product, value=0, initialValues}: useProductArgs )=>{

    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    //Valido si el componente esta montado
    const isMounted = useRef(false);//permite crear un objeto que sobrevivira a diferente refresh del mismo hook, me permite manejar una varibale sin que dispare nuevos render en react 

   //Metodo: Permite incrementar 
    const increaseBy =(value:number)=>{

        let newValue = Math.max(counter + value, 0)
       
        //Valido hasta un máximo
        if(initialValues?.maxCount){
            newValue = Math.min(newValue, initialValues?.maxCount); //toma el minimo entre ambos valores 
        }

        setCounter( newValue );
    
        onChange && onChange({ count:newValue, product });//Forma elegante de hacer un condicional if(onChange){}
    }

    //Esto permite escuchar si el value cambia y permite sincronizar de las tarjetas grandes a la pequeñas
    useEffect(()=>{
        if (!isMounted.current) return
        setCounter( value );
    },[value])

    //Se recomienda que los useEffet haga cosas especificas 
    useEffect(()=>{
       isMounted.current = true;
    },[])
    
    return {
        counter, 
        increaseBy
    }
}
