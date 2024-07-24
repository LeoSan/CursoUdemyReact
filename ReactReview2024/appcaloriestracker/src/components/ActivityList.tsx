
import React, { useMemo } from 'react';
import { ActivityType } from '../types';
import { categories } from '../data/category';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { ActivityActions } from '../reducer/activityReducer';

type ActivityProps = {
    activities:ActivityType[],
    dispatch:React.Dispatch<ActivityActions>
}

const ActivityList = ({activities, dispatch}:ActivityProps) => {

    const categoryName = useMemo( () => 
        (category:ActivityType['category']) => categories.map( cat => cat.id === category ? cat.name : '' ),[activities])

  return (
    <>
        <h2 className='text-2xl font-bold  text-black bg-lime-100'>Comida y Actividades</h2>
        {
            activities.map(item => (
                <div key={item.id} className='px-4 py-5 bg-lime-200 mt-5 flex justify-between'>
                    <div className='space-y-2 relative'>
                        <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${item.category === 1 ? 'bg-lime-500':'bg-orange-500' }`}> {categoryName(+item.category)} </p>
                        <p className='text-2xl font-bold pt-5'>{item.name}</p>
                        <p className='font-black text-2xl text-lime-500'>{item.calories} {''} <span>Calories</span> </p>
                    </div>
                    <div className='flex gap-5 items-center'> 
                         <button 
                            onClick={()=>dispatch({type:"set-activityId", payload: { id:item.id }})}>
                             <PencilSquareIcon
                                className='h-8 w-8 text-gray-800'/>
                         </button>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default ActivityList