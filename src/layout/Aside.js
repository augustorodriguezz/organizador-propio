import React,{useState} from 'react'

export const Aside = ({setListadoState, numeroDePagina, currentPageTitle}) => {

  const [tareas, setTareas] = useState({
    titulo: '',
    descripcion:''
  })
  

  const guardarEnStorage = (elemento) => {
   
    const clave = `${currentPageTitle}`;
    let elementos = JSON.parse(localStorage.getItem(clave)) || [];
    elementos.push(elemento);
    localStorage.setItem(clave, JSON.stringify(elementos));
    return elemento;
  };

  const datosForm = (e) =>{
    e.preventDefault();
    let titulo = e.target.titulo.value;
    let descripcion = e.target.descripcion.value;
    let tarea = {
      id: new Date().getTime(),
      titulo, 
      descripcion
    }
    setTareas(tarea);
    const llave= `${currentPageTitle}`;
    let objetos = JSON.parse(localStorage.getItem(llave));
    setListadoState([...objetos, tarea]);
    guardarEnStorage(tarea);
   
  }

  return (
    <aside className="lateral">
            <div className="add">
                <h3 className="title">Añadir tarea</h3>
                <form onSubmit={datosForm}>
                    <input 
                      type="text" 
                      name='titulo' 
                      placeholder="Título"
                    />
                    <textarea
                      placeholder="descripción" 
                      name='descripcion'>
                    </textarea>
                    <input 
                      type="submit" 
                      value="guardar"
                    />
                </form>
            </div>
        </aside>
  )
}

