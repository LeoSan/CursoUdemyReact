import React from 'react'
import { ProductCard, ProductImage, ProductTitle, ProductBottons } from '../components/'

//Definimos solo un objeto de varios productos 
const product = {
    id:'1',
    title:'Coffee Mug- Card',
    img:"./coffee-mug.png"
}

export const ShoppingPage = () => {
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
            <ProductCard product={product}>
                <ProductImage/>
                <ProductTitle/>
                <ProductBottons/>
            </ProductCard>
            </div>    
        </>
  )
}
