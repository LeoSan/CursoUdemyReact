import {combineReducers} from 'redux'; //Combina reducers

import productosReducer from './productosReducer';

import alertaReducer from './alertaReducer';

export default combineReducers({
  productos: productosReducer, 
  alerta: alertaReducer
});