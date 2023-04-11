//Nota esto solo funcion con typescript no se hace en javaScript

import { ReactElement } from "react";

//Creamos nuestras props 
export interface ProductCardProps { //Esta interfaz es de mayor gerarquia 
    product:Product;
    //children?:()=>JSX.Element //El ? hace que sea opcional , forma de pasar los hijos 
    children?: ReactElement | ReactElement[] 
  }
  
  //Creamos un ainterfaz para definir el objeto 
  export interface Product {
    id:string,
    title:string,
    img?:string//Hace que sea opcional
  }
  
  //Definimos nuestro contexto 
    export interface PructContextProps {
    counter:number;
    increaseBy:(value:number)=>void; //forma de declarar un metodo 
    product:Product
  }