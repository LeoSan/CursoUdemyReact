import { useState, ChangeEvent, FormEvent, Dispatch } from "react";
import { categories } from "../data/category";
import { FaRegSave } from "react-icons/fa";
import { AiOutlineClear } from "react-icons/ai";

import useForm from '../hooks/useForm';
import { ActivityActions } from "../reducer/activityReducer";

type FormProps = {
    dispatch:Dispatch<ActivityActions>

}

export const Form = ({dispatch}: FormProps) => {

    const { activity, setActivity, handleChange, isValideActivity, clearActivity, filterNameCategories } = useForm();

    const hanldeSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log('Enviando...');
        //Ejecuta la accion del reducer 
        dispatch({type:"save-activity", payload:{newActivity:activity}}); 
        setActivity({
            category:1,
            name:'',
            calories:0
        })

     }


    return (
        <form className="space-y-5 bg-white shadow p-10 rounded-lg"
            onSubmit={hanldeSubmit}
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold flex item-center">Categories:</label>
                <select
                    id="category"
                    name="category"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    value={activity.category}
                    onChange={handleChange}
                >
                    {
                        categories.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>

                        ))
                    }

                </select>
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold flex item-center">Activity:</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ej. Comida, jugo de naranja, ensalada, pesas, ejercicios"
                    className="border border-slate-300 p-2 rounded-lg w-full"
                    value={activity.name}
                    onChange={handleChange}

                />

            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold flex item-center">Calories:</label>
                <input
                    id="calories"
                    name="calories"
                    type="number"
                    placeholder="Ej. Calores 300 ó 500"
                    className="border border-slate-300 p-2 rounded-lg w-full"
                    value={activity.calories}
                    onChange={handleChange}

                />

            </div>
            <div className="flex flex-row">

                {isValideActivity() ? (
                    <div className="flex flex-start w-1/2 p-2">
                        <button
                            type="submit"
                            className="bg-gray-300 hover:bg-gray-500 w-full p-2 font-bold uppercase text-blue-400 cursor-pointer rounded-lg hover:text-white "
                            disabled={!isValideActivity()}
                        >
                            <p className="flex flex-row justify-center ">
                                <span className="font-semibold px-2">Save {filterNameCategories(categories)} </span>
                                <span className="font-semibold"><FaRegSave className="text-2xl" /></span>
                            </p>

                        </button>
                    </div>
                ) : null}


                <div className="flex flex-start w-1/2 p-2">
                    <button
                        type="submit"
                        className="bg-red-300 hover:bg-red-500 w-full p-2 font-bold uppercase text-black cursor-pointer rounded-lg hover:text-white"
                        onClick={clearActivity}
                    >
                        <p className="flex flex-row justify-center ">
                            <span className="font-semibold px-2">Clear </span>
                            <span className="font-semibold"><AiOutlineClear className="text-2xl" /></span>
                        </p>

                    </button>
                </div>
            </div>


        </form>

    )
}
