import React, {Fragment} from 'react';
import { revisarPrespuesto } from '../helpers'


const ControlPresupuesto = ({presupuesto, restante}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                presupuesto: ${presupuesto}
            </div>
            <div className={revisarPrespuesto(presupuesto, restante)}>
                Restante: ${restante}
            </div>


        </Fragment>
     );
}
 
export default ControlPresupuesto;