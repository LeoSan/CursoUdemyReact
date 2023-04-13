import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import notImage from "../assets/no-image.jpg";
import { ProductContext } from './ProductCard';

//Importamos interfaces
import {PructCardImage} from '../interfaces/interfaces';

export const ProductImage =({img, className}:PructCardImage)=>{
  
    const {product} = useContext(ProductContext)
    let imgToShow:string;
    if (img){
      imgToShow=img
    }else if(product.img){
      imgToShow=product.img
    }else{
      imgToShow = notImage
    }
    return (<img className={ `${styles.productImg} ${className}`} src={imgToShow } alt="Product" />)
  }