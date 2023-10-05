import {useContext} from 'react';
import { MapContext, PlacesContext } from '../context';


export const BtnMyLocation = () => {

    const {map, isMapReady} = useContext(MapContext);
    const { userLocation} = useContext(PlacesContext);

    const onClick = ()=>{
       
        if(!isMapReady) throw new Error('Mapa no esta listo');
        if(!userLocation) throw new Error('Not ubication user');
        
        map?.flyTo({
            zoom:14,
            center:userLocation, 
        })


    }
  
    return (
    <button className="btn btn-primary"
            onClick={onClick}
    style={{
        position:'fixed',
        top:'20px',
        right:'20px',
        zIndex:999,
        width:'50px',
        height:'50px'


    }}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
        <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
        </svg>
    </button>
  )
}
