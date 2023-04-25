//Importo librerias 
import styles from '../styles/styles.module.css';
import {useProduct}  from '../hooks/useProduct';
import { createContext, useContext} from 'react';

//Importamos interfaces
import {PructContextProps, ProductCardProps} from '../interfaces/interfaces';


export const ProductContext = createContext({} as PructContextProps );
const {Provider} =  ProductContext; 


export const ProductCard = ({children, product, className, style }:ProductCardProps) => {

    //Declaro variables 
    const {counter, increaseBy} = useProduct();

  return (
    //Esto lo hacemos apra que sus hijos por medio del provider puedan llegar dichos datos
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={ `${styles.productCard} ${className}` }
          style={style}
      >
          {children}
      </div>
    </Provider>    
  )
}
