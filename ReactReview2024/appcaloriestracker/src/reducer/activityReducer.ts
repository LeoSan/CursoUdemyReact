import type { ActivityType } from "../types";

export type ActivityActions = {
    type:'save-activity', 
    payload: {
        newActivity:ActivityType
    }

}

type ActivityState = {
    activities: ActivityType[]
    
}

export const initialState:ActivityState = {
    activities:[]

}

export const ActivityReducer =(
    state:ActivityState = initialState,
    action:ActivityActions 
)=>{

    if (action.type === 'save-activity'){
        //Maneja la logica para actualizar el state 
        console.log('desde el reducer save-activity'); 
        return {
            ...state,
            activities:[...state.activities, action.payload.newActivity]

        }

    }

    return state;

}