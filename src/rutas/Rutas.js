import React, {useState, useEffect} from 'react'
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import { Listado } from '../componentes/Listado';
import { Aside } from '../layout/Aside';
import { Header } from '../layout/Header';
import { Nav } from '../layout/Nav';
import { PageContent } from '../componentes/PageContent';

export const Rutas = () => {
 const [listadoState, setListadoState] = useState([]);
 const [pages, setPages] = useState(() => {
  const storedPages = localStorage.getItem('pages');
  return storedPages ? JSON.parse(storedPages) : [];
  });

  useEffect(() => {
    localStorage.setItem('pages', JSON.stringify(pages));
  }, [pages]);


  return (
    <BrowserRouter>

      {/* Header de todo el viewport que incluya al nav */}
      <Header/>
      <Nav pages={pages} setPages= {setPages}/>
      
        <section className="content">
        <Routes>
          {/* Ruta por defecto */}
          <Route path="/" element={<Listado setListadoState={setListadoState} listadoState={listadoState} />} />
          {/* Rutas para cada página */}
          {pages.map((page) => (
            <Route key={page.id}  path={`/${page.title.toLowerCase()}`} 
                                  element={<PageContent pages={pages} title={page.title} 
                                                        listadoState={listadoState}
                                                        setListadoState={setListadoState}
                                          />} 
            />
          ))}
        </Routes>
      </section>
        <Aside setListadoState={setListadoState}/>

      {/* Footer */}
        {/* <Footer /> */}

    </BrowserRouter>
  )
}




{/* Contenido central con las rutas y el contenido 
        <section className='content'>
          <Routes>
            <Route path='/' element={<Listado setListadoState={setListadoState} listadoState={listadoState}/>}/>
            <Route path='/listado' element={<Listado  setListadoState={setListadoState} listadoState={listadoState}/>}/>
            <Route path='/pagecontent' element={<PageContent pages={pages} title={pages}/>}/>
          </Routes>
        </section>*/}
