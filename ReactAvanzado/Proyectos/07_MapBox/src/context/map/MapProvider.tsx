/* eslint import/no-webpack-loader-syntax:off */
import {useReducer, useEffect, useContext, useLayoutEffect} from 'react';
//@ts-ignore
import { AnySourceData, LngLatBounds, Map, Marker, Popup } from '!mapbox-gl';
import { MapContext } from './MapContext';
import { mapReducer } from './mapReducer';
import { PlacesContext } from '../';
import { directionsApi } from '../../apis';
import { DirectionsResponse } from '../../interfaces/directions';

export interface MapState {
  isMapReady:boolean, 
  map?:Map,
  markers:Marker[]
}


const INITIAL_STATE:MapState = {
  isMapReady:false, 
  map:undefined,
  markers:[],
}

interface Props {
  children:JSX.Element | JSX.Element[];
}

export const MapProvider = ({children}:Props) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);
  const { places } = useContext(PlacesContext)

  
  useLayoutEffect(() => {
    state.markers.forEach( marker => marker.remove() );
    const newMarkers: Marker[] = [];

    for (const place of places) {
        const [ lng, lat ] = place.center;
        const popup = new Popup()
            .setHTML(`
                <h6>${ place.text_es }</h6>
                <p>${ place.place_name_es }</p>
            `);
        
        const newMarker = new Marker()
            .setPopup( popup )
            .setLngLat([ lng, lat ])
            .addTo( state.map! );
        
        newMarkers.push( newMarker );
    }
    // Todo:
    dispatch({ type: 'setMarkers', payload: newMarkers });
    
}, [ places ]);

  //Metodo para setear el mapa 
  const setMap = (map:Map)=>{

    const MyLocationPopup = new Popup()
                            .setHTML('<h4>Aqui estoy</h4> <p>En algun lugar</p>')

      new Marker({color:'red'})
                  .setLngLat(map.getCenter())
                  .setPopup(MyLocationPopup)
                  .addTo(map);
    dispatch({type:'setMap', payload: map})
  }

  //Efecti de redirección con las direcciones clickeadas 
  const getRouteBetweenPoints = async(start: [number, number], end: [number, number] ) => {
    const resp = await directionsApi.get<DirectionsResponse>(`/${start.join(',')}; ${end.join(',')} `)
    //console.log(resp);
    const {distance, duration, geometry} = resp.data.routes[0];
    const {coordinates:coords} = geometry;
    let kms = distance / 1000;
    kms = Math.round(kms*100);
    kms/=100; 

    const minutes  =  Math.floor(duration/60);
    console.log({kms, minutes}); 
    //Creamos Bounds Efecto en el mapa 
    const bounds = new LngLatBounds(
      start,
      start,
    ); 

    for( const coord of coords ){
      const newCoord: [number, number] = [coord[0], coord[1]]; 
      bounds.extend(newCoord);
    }
    state.map?.fitBounds(bounds, {
      padding:200
    });


   //PolyLine es la linea que te indica por donde recorrer 
   //Definimos nuestra polyLine
   const sourceData:AnySourceData = {
      type:'geojson',
      data:{
        type:'FeatureCollection',
        features:[
          {
            type:'Feature',
            properties:{},
            geometry:{
              type:'LineString',
              coordinates:coords
            }
          }
        ]
      }
   }
   //Remuevo ruta 
   if (state.map?.getLayer('RouteString')){
    state.map?.removeLayer('RouteString');
    state.map?.removeSource('RouteString');
   }
      
   //Agremamos al mapa la PolyLine -> Ojo aqui si lo deseas dinamico debes crear varia sID RouteString, para este ejemplo solo se necesita una por eso se limpia 
   state.map?.addSource('RouteString', sourceData);
   state.map?.addLayer({
    id:'RouteString',//Cualquiera
    type:'line',//
    source:'RouteString',
    layout:{
      'line-cap':'round',
      'line-join':'round',
    },
    paint:{
      "line-color":'red',
      "line-width": 3
    }
   })
  };

  return (
    <MapContext.Provider value={{
        ...state,
       // Methods
        setMap,
        getRouteBetweenPoints,
    }}>
        { children }
    </MapContext.Provider>
)
}
