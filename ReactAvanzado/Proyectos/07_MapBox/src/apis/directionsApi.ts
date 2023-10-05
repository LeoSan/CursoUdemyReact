import axios from 'axios';
 const directionsApi = axios.create({
    baseURL:'https://api.mapbox.com/directions/v5/mapbox/driving',
    params:{
        alternatives:false,
        geometries:'geojson',
        overview:'simplified',
        language:'es',
        steps:false,
        access_token:'pk.eyJ1IjoibGVvc2FuNjIzIiwiYSI6ImNsbWlvcGpnZzJyYTAzanBjOW55OWJnOW4ifQ.y1pLlDj2Nn7IzH6rr6Uh0A'
    }
 }); 

 export default directionsApi;