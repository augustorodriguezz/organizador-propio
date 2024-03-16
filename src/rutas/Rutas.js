import React from 'react'
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import { Inicio } from '../componentes/Inicio';
import { Aside } from '../layout/Aside';
import { Header } from '../layout/Header';
import { Nav } from '../layout/Nav';

export const Rutas = () => {
 
  return (
    <BrowserRouter>

      {/* Header de todo el viewport que incluya al nav */}
      <Header/>
      <Nav />
      
      {/* Contenido central con las rutas y el contenido */}
        <section className='content'>
          <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/inicio' element={<Inicio/>}/>
          </Routes>
        </section>
        <Aside/>

      {/* Footer */}
        {/* <Footer /> */}

    </BrowserRouter>
  )
}
