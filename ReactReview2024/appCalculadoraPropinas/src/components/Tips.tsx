import { Dispatch, SetStateAction } from 'react';
import { tipOptions } from '../../src/data/tip';
import { MenuItem } from "../types"

type TipsProps = {
    tip:MenuItem['id'],
    setTip: Dispatch<SetStateAction<number>>
}

export const Tips = ({tip, setTip}:TipsProps) => {
  return (
    <div className="">
        <h3 className="font-black text-2xl">Propina:</h3>
        <form>
            {
                tipOptions.map(item=>(
                        <div className='flex gap-2' key={item.id}>
                            <label htmlFor={item.id} >{item.label}</label>
                            <input 
                                id={item.id}
                                type='radio'
                                name='tip'
                                value={item.value}
                                onChange={e=>setTip(+e.target.value)}
                               
                                />
                        </div>
            
                    ))

            }


        </form>
    </div>
  )
}
