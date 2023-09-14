import { useReducer, useEffect } from "react";
import { PlaceContext } from "./PlacesContext";
import { placesreducer } from "./PlacesReducer";
import { getUserLocation } from "../../helpers";

export interface PlacesState {
    isLoading:boolean;
    userLocation?:[number, number],
}

const INITIAL_STATE: PlacesState = {
    isLoading:true,
    userLocation:undefined

}

 interface Props {
    children:JSX.Element | JSX.Element[]

}

export const PlacesProvider = ({children}:Props)=>{
    
    const [state, dispatch] = useReducer(placesreducer, INITIAL_STATE); 

    useEffect(()=>{
        getUserLocation()
            .then(lngLat => dispatch({type:'setUserLocation', payload:lngLat}))   
   
    },[]);
      
    
    return (
        <PlaceContext.Provider value={{
            ...state,
        }}>
            {children}
        </PlaceContext.Provider>
    )

}