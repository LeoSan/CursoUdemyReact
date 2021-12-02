import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';

import CategoriaProvider from './context/CategoriaContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';


function App() {
  return (
      <CategoriaProvider>
        <RecetasProvider>
            <ModalProvider>
                <Header titulo="Busca Recetas de Bebidas y algo mas"/>
                <div className="container mt-5">
                    <div className="row">
                        <Formulario/>
                    </div>
                </div>
                <ListaRecetas

                />
            </ModalProvider>
          </RecetasProvider>
      </CategoriaProvider>  

    );
}

export default App;
