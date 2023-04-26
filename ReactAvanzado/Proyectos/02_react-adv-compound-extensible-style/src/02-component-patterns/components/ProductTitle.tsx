import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import notImage from "../assets/no-image.jpg";
import { ProductContext } from './ProductCard';


//Importamos interfaces
import {PructCardTitle} from '../interfaces/interfaces';

export const ProductTitle =({title, className}:PructCardTitle)=>{//Solos e hace esto cuando es solo una propiedad si no pues debemos aplicar lo de una interfaz
  
    const {product} = useContext(ProductContext)
    let titleToShow:string;
    if (title){
      titleToShow=title
    }else if(product.title){
      titleToShow=product.title
    }else{
      titleToShow = 'sin titulo'
    }  
    
    return (<span className={ `${styles.productDescription} ${className}` }>{titleToShow}</span>)
  }