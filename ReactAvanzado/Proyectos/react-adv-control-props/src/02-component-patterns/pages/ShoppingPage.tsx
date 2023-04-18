import { useState } from 'react';
import { ProductCard, ProductImage, ProductTitle, ProductBottons } from '../components/'
import '../styles/styles.module.css';
import {Product, PructInCar} from '../interfaces/interfaces';

import '../styles/styles.module.css';

//Definimos solo un objeto de varios productos 
const product1 = {
    id:'1',
    title:'Coffee Mug - Card',
    img:"./coffee-mug.png"
}
const product2 = {
    id:'2',
    title:'Coffee Meme - Card',
    img:"./coffee-mug2.png"
}

const product:Product[] = [product1, product2];

console.log("product->", product)



export const ShoppingPage = () => {

    const [shopingcart, setShopingcart] = useState<{[key:string]:PructInCar}>({});
    
    const onProductCountChange =()=>{
        console.log('entro');

    }

  return (
        <>
            <div>
                <h1>Shopping Store</h1>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>        
                    <ProductCard 
                        key={product2.id}
                        product={product2} 
                        className='bg-dark text-white'
                        style={{backgroundColor:'#70D1F8'}}
                        onChange={()=>onProductCountChange()}
                    >
                    <ProductImage className='custom-image'/>
                    <ProductTitle className='text-white'/>
                    <ProductBottons className='custom-image'/>
                </ProductCard>
            </div>    
            <div style={{
                  position: 'fixed',
                  top:'0px',
                  right: '10px'
            }}>
                <ProductCard 
                        product={product1} 
                        className='bg-dark text-white'
                        style={{width:'100px'}}
                    >
                    <ProductImage className='custom-image'/>
                    <ProductBottons className='custom-image'/>
                </ProductCard>
            </div>
        </>
  )
}
