import React, {useState} from 'react'
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import { Listado } from '../componentes/Listado';
import { Aside } from '../layout/Aside';
import { Header } from '../layout/Header';
import { Nav } from '../layout/Nav';

export const Rutas = () => {
 const [listadoState, setListadoState] = useState([]);
  return (
    <BrowserRouter>

      {/* Header de todo el viewport que incluya al nav */}
      <Header/>
      <Nav />
      
      {/* Contenido central con las rutas y el contenido */}
        <section className='content'>
          <Routes>
            <Route path='/' element={<Listado setListadoState={setListadoState} listadoState={listadoState}/>}/>
            <Route path='/listado' element={<Listado  setListadoState={setListadoState} listadoState={listadoState}/>}/>
          </Routes>
        </section>
        <Aside setListadoState={setListadoState}/>

      {/* Footer */}
        {/* <Footer /> */}

    </BrowserRouter>
  )
}
