import type { ActivityType } from "../types";

export type ActivityActions = 
    { type:'save-activity',  payload: { newActivity:ActivityType } } | 
    { type:'set-activityId', payload: { id: ActivityType['id'] } }

export type ActivityState = {
    activities: ActivityType[],
    activeId:   ActivityType['id']
}

export const initialState:ActivityState = {
    activities:[],
    activeId:''
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

    if (action.type === 'set-activityId'){
        //Maneja la logica para actualizar el state 
        console.log('Desde el reducer set-activityId ->'+action.payload.id); 
        return {
            ...state,
            activeId:action.payload.id
        }
    }
    return state;
}