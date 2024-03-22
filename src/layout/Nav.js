import React, {useState, useEffect} from 'react'
import { PageContent } from '../componentes/PageContent';
import { NavLink } from 'react-router-dom'
import { faCheck, faPlus, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Nav = ({pages, setPages, setPageIndex, setCurrentPageTitle, currentPageTitle}) => {
  
  
      const [showAddPageForm, setShowAddPageForm] = useState(false);
      const [newPageTitle, setNewPageTitle] = useState('');
    
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

  const pageClick = (index) => {
    setPageIndex(index); 
  };
  return (
    <nav className="nav">
        
        <ul>
        {pages.map((page, index) => (
          <li key={page.id} className={page.title === currentPageTitle ? 'li2' : 'li'} onClick={() => {pageClick(index); setCurrentPageTitle(page.title);}}>
            <NavLink to={`/${page.title.toLowerCase()}`}>{page.title}</NavLink>
          </li>
        ))}
        {showAddPageForm ? (
        <div>
          <input type="text" value={newPageTitle} className='nuevaPagina'
                 onChange={(e) => setNewPageTitle(e.target.value)} />
          <button className='buttonNav check' onClick={handleAcceptAddPage} >
            <FontAwesomeIcon className='checkIcon' icon={faCheck} />
          </button>
          <button className='buttonNav check' onClick={handleCancelAddPage}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      ) : (
        <button className='buttonNav' onClick={handleAddPage}>
          <FontAwesomeIcon icon={faPlus}/><br/>
          <b>Agregar página</b>
        </button>
      )}
        <button className='buttonNav' onClick={() => handleRemovePage(pages[pages.length - 1].id)}>
        <FontAwesomeIcon icon={faTrash} /><br/><b>Eliminar última</b></button>
      </ul>
    </nav>
  )
}

{/* <button onClick={() => onPageChange(page.id)}>{page.title}</button> */}
