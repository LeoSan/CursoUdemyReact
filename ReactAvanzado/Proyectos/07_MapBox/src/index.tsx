/* eslint import/no-webpack-loader-syntax:off */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {MapsApp} from './MapsApp';

//@ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoibGVvc2FuNjIzIiwiYSI6ImNsbWlvcGpnZzJyYTAzanBjOW55OWJnOW4ifQ.y1pLlDj2Nn7IzH6rr6Uh0A';

if(!navigator.geolocation){
  alert("tu navegador no soporta geolocation");
  throw new Error("tu navegador no soporta geolocation");
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);