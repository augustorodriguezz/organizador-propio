import React, {useState, useEffect} from 'react'
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import { Aside } from '../layout/Aside';
import { Header } from '../layout/Header';
import { Nav } from '../layout/Nav';
import { PageContent } from '../componentes/PageContent';
import { Bienvenida } from '../componentes/Bienvenida';

export const Rutas = () => {
 const [listadoState, setListadoState] = useState([]);
 const [pages, setPages] = useState(() => {
  const storedPages = localStorage.getItem('pages');
  return storedPages ? JSON.parse(storedPages) : [];
  });

  useEffect(() => {
    localStorage.setItem('pages', JSON.stringify(pages));
  }, [pages]);

  const [pageIndex, setPageIndex] = useState(0); 
  const [currentPageTitle, setCurrentPageTitle] = useState(""); 

  return (
    <BrowserRouter>

      {/* Header de todo el viewport que incluya al nav */}
      <Header/>
      <Nav pages={pages} setPages= {setPages} setPageIndex={setPageIndex} 
      setCurrentPageTitle={setCurrentPageTitle} />
      
        <section className="content">
        <Routes>
          {/* Ruta por defecto */}
          <Route path="/" element={<Bienvenida />} />
          {/* Rutas para cada página */}
          {pages.map((page) => (
            <Route key={page.id}  path={`/${page.title.toLowerCase()}`} 
                                  element={<PageContent pages={pages} title={page.title} 
                                                        listadoState={listadoState}
                                                        setListadoState={setListadoState}
                                                        numeroDePagina={pageIndex}
                                                        currentPageTitle={currentPageTitle}
                                          />} 
            />
          ))}
        </Routes>
      </section>
        <Aside setListadoState={setListadoState} numeroDePagina={pageIndex} currentPageTitle={currentPageTitle} />

      {/* Footer */}
        {/* <Footer /> */}

    </BrowserRouter>
  )
}





