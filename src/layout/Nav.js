import React, {useState, useEffect} from 'react'

export const Nav = () => {
    const [pages, setPages] = useState(() => {
        const storedPages = localStorage.getItem('pages');
        return storedPages ? JSON.parse(storedPages) : [
          { id: 1, title: 'Inicio' },
          { id: 2, title: 'Acerca de' },
          { id: 3, title: 'Servicios' },
          { id: 4, title: 'Contacto' },
        ];
      });
      const [showAddPageForm, setShowAddPageForm] = useState(false);
      const [newPageTitle, setNewPageTitle] = useState('');
      useEffect(() => {
        localStorage.setItem('pages', JSON.stringify(pages));
      }, [pages]);
    
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
    const newPage = { id: pages.length + 1, title: newPageTitle };
    setPages([...pages, newPage]);
    setShowAddPageForm(false);
    setNewPageTitle('');
  };
  return (
    <nav className="nav">
        {/* <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Películas</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contacto</a></li>
        </ul> */}
        <ul>
        {pages.map((page) => (
          <li key={page.id}>
            <button>{page.title}</button>
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
