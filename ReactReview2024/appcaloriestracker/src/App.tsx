
import './App.css'
import { Form } from './components/Form'



function App() {

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
          <Form />

        </div>
      </section>

    </>
  )
}

export default App
