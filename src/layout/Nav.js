import React, {useState, useEffect} from 'react'
import { PageContent } from '../componentes/PageContent';
import { NavLink } from 'react-router-dom'

export const Nav = ({pages, setPages}) => {
    // const [pages, setPages] = useState(() => {
    //     const storedPages = localStorage.getItem('pages');
    //     return storedPages ? JSON.parse(storedPages) : [
    //       { id: 1, title: 'Inicio' },
    //       { id: 2, title: 'Acerca de' },
    //       { id: 3, title: 'Servicios' },
    //       { id: 4, title: 'Contacto' },
    //     ];
    //   });
      const [showAddPageForm, setShowAddPageForm] = useState(false);
      const [newPageTitle, setNewPageTitle] = useState('');
      // useEffect(() => {
      //   localStorage.setItem('pages', JSON.stringify(pages));
      // }, [pages]);
    
      const handleAddPage = () => {
        setShowAddPageForm(true);
      };
    
      const handleRemovePage = (pageId) => {
        const updatedPages = pages.filter((page) => page.id !== pageId);
        setPages(updatedPages);
      };
      
  const handleCancelAddPage = () => {
    setShowAddPageForm(false);
    setNewPageTitle('');
  };

  const handleAcceptAddPage = () => {
    const newPage = { id: pages.length + 1, 
                      title: newPageTitle ,
                      content: [] };
    setPages([...pages, newPage]);
    setShowAddPageForm(false);
    setNewPageTitle('');
  };
  return (
    <nav className="nav">
        
        <ul>
        {pages.map((page) => (
          <li key={page.id}>
            <NavLink to={`/${page.title.toLowerCase()}`}>{page.title}</NavLink>
          </li>
        ))}
        {showAddPageForm ? (
        <div>
          <input type="text" value={newPageTitle} onChange={(e) => setNewPageTitle(e.target.value)} />
          <button onClick={handleAcceptAddPage}>Aceptar</button>
          <button onClick={handleCancelAddPage}>Cancelar</button>
        </div>
      ) : (
        <button onClick={handleAddPage}>Agregar Página</button>
      )}
        <button onClick={() => handleRemovePage(pages[pages.length - 1].id)}>Eliminar Última Página</button>
      </ul>
    </nav>
  )
}

{/* <button onClick={() => onPageChange(page.id)}>{page.title}</button> */}
