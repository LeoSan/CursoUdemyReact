/* eslint import/no-webpack-loader-syntax:off */
import  {useContext, useRef, useLayoutEffect } from 'react';
//@ts-ignore
import {Map, NavigationControl, FullscreenControl} from '!mapbox-gl'; 
import { PlacesContext, MapContext } from '../context';
import { Loading } from './Loading';

export const MapView = () => {
  
    const {isLoading, userLocation} = useContext(PlacesContext);
    const {setMap} = useContext(MapContext);  

    const mapDiv = useRef<HTMLDivElement>(null);
  
    useLayoutEffect(() => {
    
        if(!isLoading){
            const map = new Map({
                container: mapDiv.current!, // container ID
                //style: 'mapbox://styles/mapbox/dark-v10', // importat estilos Dark 
                style: 'mapbox://styles/mapbox/outdoors-v12', // importat estilos light 
                center: userLocation, // starting position [lng, lat]
                zoom: 14, // starting zoom
            });
            map.addControl( new NavigationControl(), 'bottom-right');
            map.addControl( new FullscreenControl(), 'bottom-right');
            setMap(map);
        }
    }, [isLoading])

    if(isLoading){
        return ( 
            <Loading/>
        )
    }
    return (
        <div id='divRef' ref={mapDiv} 
            style={{
                height:'100vh',
                width:'100vh',
                position:'fixed',
                left:0,
                top:0,
            }}
        >
            {userLocation?.join(',')}
        </div>
  )
}
