import { useState, useEffect, useMemo } from "react";
import { db } from '../data/db';


const useCart = ()=>{

    const initialCart =()=>{
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart):[];
    }
    const [data, setData] = useState(db);
    const [cart, setCart] = useState(initialCart);

    const addToCard=(item)=>{
        const itemExist = cart.findIndex((guitar)=>guitar.id === item.id);
        if (itemExist >= 0){
            console.info('Ya existe');
            const updateCart = [...cart];
            updateCart[itemExist].quantity++;
            setCart(updateCart);
        }else{
            item.quantity = 1 
            console.info('Agregando');
            setCart([...cart, item]);
        }
        saveLocaStorage();
    }

    const removeFromCart=(id)=>{
        console.info('eliminando...');
        setCart(prevCart => prevCart.filter(guitar => guitar.id!== id ));
    }

    const increaseFormCart = (id)=>{
        const updateCart = cart.map(item=>{
            if(item.id === id && item.quantity <5){
                return {
                    ...item,
                    quantity:item.quantity + 1
                }
            }
            return item;
        });
        setCart(updateCart);
        console.info('agregar cantidad guitarra..',id);
    }

    const discountFromCart = (id) =>{
        const updateCart = cart.map(item=>{
            if(item.id === id && item.quantity > 1){
                return {
                    ...item,
                    quantity:item.quantity - 1
                }
            }
            return item;
        });
        setCart(updateCart);
        console.info('quitar cantidad guitarra..',id);

    }

    const clearCart =()=>{
        setCart([]);
        console.log('limpiar cart');
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

        //state derivado 
        const isEmpty   = useMemo( () => cart.length === 0, [cart] );
        const cartTotal = useMemo( () => cart.reduce((total, item)=> total + (item.quantity * item.price), 0 ), [cart]);
    
    return {
        data,
        cart,
        addToCard,
        increaseFormCart,
        removeFromCart,
        discountFromCart,
        clearCart,
        isEmpty, 
        cartTotal
    }
}

export default useCart;