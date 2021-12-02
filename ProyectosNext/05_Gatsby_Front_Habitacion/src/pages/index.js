import React from "react"
import Layout from '../components/layout';
import ImagenHotel from '../components/imagenHotel';
import ContenidoInicio from '../components/contenidoinicio';

import useHabitaciones from '../hook/useHabitacion'; 
import HabitaionDetalle from '../components/habitacionDetalle';



const IndexPage = () => {

const habitaciones = useHabitaciones();

  console.log(habitaciones);
  
  return(
    <Layout>
        <ImagenHotel></ImagenHotel>
        <ContenidoInicio/>
       <h2 className="tituloHabitacion">Nuestras Habitaciones</h2>
       <ul className="listadoHabitaciones">
            {habitaciones.map(filas=>(

              <HabitaionDetalle
                key={filas.id}
                habitacion={filas}
              />

            ))}
       </ul>
       


    </Layout>
    
  )
}

export default IndexPage
