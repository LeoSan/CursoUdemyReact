import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import notImage from "../assets/no-image.jpg";
import { ProductContext } from './ProductCard';


export const ProductImage =({img = ''})=>{
  
    const {product} = useContext(ProductContext)
    let imgToShow:string;
    if (img){
      imgToShow=img
    }else if(product.img){
      imgToShow=product.img
    }else{
      imgToShow = notImage
    }
    return (<img className={styles.productImg} src={imgToShow } alt="Product" />)
  }