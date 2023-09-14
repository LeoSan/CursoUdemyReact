import { PlacesState } from "./PlacesProvider";


type PlacesAccion = {
    type: 'setUserLocation', 
    payload:[number, number]
};

export const  placesreducer = ( state:PlacesState, action:PlacesAccion):PlacesState =>{
    switch (action.type) {
        case 'setUserLocation':
            return  {
                ...state,
                isLoading:false,
                userLocation:action.payload
            }
        default:
            return state;
    }
}