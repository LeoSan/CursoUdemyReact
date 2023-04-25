import React from 'react'
import { ProductCard, ProductImage, ProductTitle, ProductBottons } from '../components/'
import '../styles/styles.module.css';

//Definimos solo un objeto de varios productos 
const product = {
    id:'1',
    title:'Coffee Mug- Card',
    img:"./coffee-mug.png"
}

export const ShoppingPage = () => {
  return (
        <>
            <div >
                <h1>Shopping Store</h1>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>        
            <ProductCard 
                product={product} 
                className='bg-dark text-white'
                style={{backgroundColor:'#70D1F8'}}
             >
                <ProductImage className='custom-image'/>
                <ProductTitle className='text-white'/>
                <ProductBottons className='custom-image'/>
            </ProductCard>
            </div>    
        </>
  )
}
