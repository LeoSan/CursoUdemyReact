//Importo librerias 
import styles from '../styles/styles.module.css';
import notImage from "../assets/no-image.jpg";
import  {useProduct}  from '../hooks/useProduct';

//Creamos nuestras props 
interface Props { //Esta interfaz es de mayor gerarquia 
  product:Product
}

//Creamos un ainterfaz para definir el objeto 
interface Product {
  id:string,
  title:string,
  img?:string
}


export const ProductCard = ({product }:Props) => {

    //Declaro variables 
    const {counter, increaseBy} =useProduct();

  return (
    <div className={styles.productCard}>
        
        <img className={styles.productImg} src={product.img ? product.img: notImage } alt="not-coffee" />

        <span className={styles.productDescription}> product.title</span>
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={()=>increaseBy(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={styles.buttonAdd} onClick={()=>increaseBy(+1)}>+</button>
        </div>
    </div>
  )
}
