import React from 'react';
import ReactDOM from 'react-dom/client';

import {MapsApp} from './MapsApp';

if (!navigator.geolocation){
  alert('Tu navegador no jala wey'); 
  throw new Error('Tu navegador no jala wey');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
