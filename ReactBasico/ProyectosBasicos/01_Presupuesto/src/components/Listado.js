import React, {Fragment} from 'react';
import Gasto from './Gasto'; 


const Listado = ({gastos}) => {


    return ( 
        <Fragment>
           <div className='gastos-realizados'>
                <h2>Listado</h2>
                {gastos.map(filas =>(
                        <Gasto
                            key = {filas.id}
                            gastoA={filas}
                        
                        />

                ))}

            </div>    

        </Fragment>

     );
}
 


export default Listado;