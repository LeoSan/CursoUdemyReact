
import {useContext, useRef, useLayoutEffect} from "react";
import { PlaceContext } from "../context";
import { Loading } from "./loading";
import '../styles.css'

//Paso 1: Incluimos la librerias luego de instalarla
/* eslint-disable import/first */
const mapboxgl = require('mapbox-gl');
mapboxgl.accessToken = 'pk.eyJ1IjoibGVvc2FuNjIzIiwiYSI6ImNsbWlvcGpnZzJyYTAzanBjOW55OWJnOW4ifQ.y1pLlDj2Nn7IzH6rr6Uh0A';

export const MapView =()=>{
    const {isLoading, userLocation } = useContext(PlaceContext);

    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(()=>{
       if(!isLoading){
        const map = new mapboxgl.Map({
            container: mapDiv.current!, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: userLocation, // starting position [lng, lat]
            zoom: 14, // starting zoom
            });
       } 
    },[isLoading])
    


    if (isLoading){
        return (
            <Loading/>
        )
    }
    

    return (
        <div ref={mapDiv} 
        style={{
            
            height:'100vh',
            width:'100vw',
            left:0,
            position:'fixed',
            top:0,

        }}>
            {userLocation?.join(',')}
        </div>
    )

}