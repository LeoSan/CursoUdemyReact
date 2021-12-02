import React,{useEffect, useState, useContext} from 'react';
import Layout from '../component/layout/Layout';
import {FirebaseContext} from '../firebase';

const Home = () => {
  const [productos, guardarProductos] = useState();
  const {firebase} = useContext(FirebaseContext);

    useEffect(() => {

      const obtenerProductos = ()=>{
          firebase.db.collection('productos').orderBy('creado', 'desc').onSnapshot(manejarSnapsshot);
      }

      obtenerProductos();
    }, []);

function manejarSnapsshot(snapshot){
  const productos = snapshot.docs.map(doc=>{
    return{
      id:doc.id, 
      ...doc.data()
    }
  });
  guardarProductos(productos);
  console.log(productos);
}


  return(
    <div>
    <Layout>
      <h1>Inicio </h1>
    </Layout>
  </div>

  )
}
export default Home;

