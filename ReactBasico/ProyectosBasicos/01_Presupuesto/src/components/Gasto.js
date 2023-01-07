import React from 'react';



const Gasto = ({gastoA}) => (
    <li className="gastos">
    <p>{gastoA.nombre} </p>
    <span className="gasto"> $ {gastoA.cantidad}</span>
    </li>
);
 


export default Gasto;