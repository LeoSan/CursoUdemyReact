import type { ActivityType } from "../types";

export type ActivityActions = 
    { type:'save-activity',     payload: { newActivity:ActivityType } } | 
    { type:'set-activityId',    payload: { id: ActivityType['id'] } }   |
    { type:'delete-activity', payload: { id: ActivityType['id'] } }  


export type ActivityState = {
    activities: ActivityType[],
    activeId:   ActivityType['id']
}

const localStorageActivities = ():ActivityType[]=>{

    const activities = localStorage.getItem('activities');
    return activities ? JSON.parse(activities) : []

}

export const initialState:ActivityState = {
    activities:localStorageActivities(),
    activeId:''
}

export const ActivityReducer =(
    state:ActivityState = initialState,
    action:ActivityActions 
)=>{

    if (action.type === 'save-activity'){
        //Zona Segura para echar codigo 
        //Maneja la logica para actualizar el state 
        console.log('desde el reducer save-activity'); 
        let updateActivities : ActivityType[] = [];
        if (state.activeId){
            updateActivities = state.activities.map(item => item.id === state.activeId ? action.payload.newActivity : item );

        }else{
            updateActivities = [...state.activities, action.payload.newActivity]; 

        }
        return {
            ...state,
            activities:updateActivities,
            activeId:''
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
    if (action.type === 'delete-activity'){
        //Maneja la logica para actualizar el state 
        console.log('Desde el reducer delete-activity->'+action.payload.id); 
        return {
            ...state,
            activities:state.activities.filter(item => item.id != action.payload.id)
        }
    }
    return state;
}