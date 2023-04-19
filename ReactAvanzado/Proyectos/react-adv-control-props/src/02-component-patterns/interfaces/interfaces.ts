//Nota esto solo funcion con typescript no se hace en javaScript

import { ReactElement } from "react";

//Creamos nuestras props Esto es la clave para que funcione el patron de diseño 
export interface ProductCardProps { //Esta interfaz es de mayor gerarquia 
    product:    Product;
    children?:  ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties; //Esto permite usar estilos dentro de tu componente  
    //children?:()=>JSX.Element //El ? hace que sea opcional , forma de pasar los hijos 
    onChange?:(args:onChangeArgs)=>void; //forma de declarar un metodo 
  }
  
  //Creamos una interfaz para definir el objeto 
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
  
  //Definimos interfaz para el componente titulo 
  export interface PructCardTitle {
    className?:string;
    title?:string;
  }  
  
//Definimos interfaz para el componente image 
  export interface PructCardImage {
    className?:string;
    img?:string;
  }
  
  //Definimos interfaz para el componente image 
  export interface PructCardButtons {
    className?:string;
    style?: React.CSSProperties; //Esto permite usar estilos dentro de tu componente  
  }

  //Definimos interfaz para el componente image 
  export interface PructInCar extends Product {
    count:number
  }
  //Definimos interfaz para el componente image 
  export interface onChangeArgs {
    product:Product;
    count:number;
  }



