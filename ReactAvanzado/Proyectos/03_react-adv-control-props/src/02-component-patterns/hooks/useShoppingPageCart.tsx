import { Product, PructInCar } from "../interfaces/interfaces";
import { useState } from 'react';

export const useShoppingPageCart = () => {
  
  
  const [shopingcart, setShopingcart] = useState<{[key:string]:PructInCar}>({});//Forma de definir un objeto en staje con apoyo de los <[key:string]:interface>
    
  const onProductCountChange =({count, product}:{count:number, product:Product})=>{
      setShopingcart(oldShopingCart =>{
          
      //Solución usando Control Promps
      const producInCart:PructInCar = oldShopingCart[product.id] || {...product, count:0}
      if (Math.max(producInCart.count + count, 0)){
          producInCart.count +=count;
          return {
              ...oldShopingCart,
              [product.id]:producInCart
          }
      }

      //Borramos producto
      const { [product.id]:toDelete, ...rest} = oldShopingCart;//Forma de eliminar
      return (rest)


      //Solución vieja 
      /*    if (count === 0 ){
              const { [product.id]:toDelete, ...rest} = oldShopingCart;//Forma de eliminar
              return (rest)
          }   
          return {
                  ...oldShopingCart,
                  [product.id]:{...product, count}
              }
      */

      }); 
  }
  
  
  return {
    shopingcart,
    onProductCountChange,
  }
}
