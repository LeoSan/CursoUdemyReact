
import { useState, ChangeEvent, FormEvent } from "react";
import type { ActivityType, CategoryType } from "../types"

export default function form() {

    const [activity, setActivity] = useState<ActivityType>({
        category:1,
        name:'',
        calories:0
    });


    const handleChange = (e:ChangeEvent<HTMLSelectElement>|ChangeEvent<HTMLInputElement> )=>{
        
        const isNumberField = ['category', 'calories'].includes(e.target.id);
        
        setActivity({
            ...activity,
            [e.target.id]:isNumberField?+e.target.value:e.target.value
        })

     }

     const isValideActivity =()=>{
        const {name, calories} = activity;
        return name.trim() !== '' && calories > 0;

     }
     const clearActivity =()=>{
        setActivity({
            category:1,
            name:'',
            calories:0
        });
     }

     const hanldeSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log('Enviando...');


     }

     const filterNameCategories =(categories:CategoryType[])=>{
        const result = categories.filter((item) => item.id == activity.category)
        return result[0]?.name;
     }
 

    return {
        activity,
        setActivity,
        handleChange, 
        isValideActivity,
        clearActivity,
        filterNameCategories,
        hanldeSubmit

    }
    
}