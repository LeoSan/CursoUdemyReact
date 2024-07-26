import { useReducer, useEffect } from 'react';
import { ActivityReducer, initialState } from './reducer/activityReducer';
import './App.css'
import { Form } from './components/Form';
import ActivityList from './components/ActivityList';

function App() {
  const [state, dispatch] = useReducer(ActivityReducer , initialState);

  useEffect(() => {
      localStorage.setItem('activities', JSON.stringify(state.activities) );
  }, [state.activities])
  
  return (
    <>
      <header className='bg-blue-500 py-3'>
        <div className='max-w-4xl mx-auto flex justify-start pl-3'>
          <h1 className='text-center  text-lg font-bold text-white uppercase'>
            Contador de Calorias
          </h1>
        </div>
      </header>
      <section className='bg-blue-400 py-16 px-5'>
        <div className='max-w-4xl mx-auto'>
          <Form 
            dispatch={dispatch}
            state ={state}
         
          />

        </div>
      </section>
      <section className='p-10 mx-auto max-w-4xl'>
        <ActivityList
          activities ={state.activities}
          dispatch   ={dispatch}
        />
      </section>

    </>
  )
}

export default App
