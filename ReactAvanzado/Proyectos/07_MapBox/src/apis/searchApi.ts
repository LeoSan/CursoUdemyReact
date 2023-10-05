import axios from 'axios';
 const searchApi = axios.create({
    baseURL:'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        limit:5,
        language:'es',
        access_token:'pk.eyJ1IjoibGVvc2FuNjIzIiwiYSI6ImNsbWlvcGpnZzJyYTAzanBjOW55OWJnOW4ifQ.y1pLlDj2Nn7IzH6rr6Uh0A'
    }
 }); 

 export default searchApi;