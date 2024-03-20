import { useEffect } from "react";
import React from 'react'

export const PageContent = ({title, pages, numeroDePagina , listadoState, setListadoState, currentPageTitle}) => {
  useEffect(()=> {
    console.log("componente del listado de tareas cargado!!");
   
    conseguirTareas();
  },[currentPageTitle]);

  const conseguirTareas = () => {
    const clave= `${currentPageTitle}`;
    let tareas = JSON.parse(localStorage.getItem(clave));
    setListadoState(tareas);
  };
  const borrarTarea = (id) => {
    const claveB= `${currentPageTitle}`;
    let tareasAlmacenadas = JSON.parse(localStorage.getItem(claveB));
    let nuevasTareas = tareasAlmacenadas.filter(tarea => tarea.id !== parseInt(id));
    setListadoState(nuevasTareas);
    const key= `${currentPageTitle}`;
   
    localStorage.setItem(key , JSON.stringify(nuevasTareas));
  };
  
  
  return (
  <>
  
    
    
    {
            listadoState != null && listadoState.map( (tarea) => {
              return (
                <article className="tarea-item" key={tarea.id}>
                    <h3 className="title">{tarea.titulo}</h3>
                    <p className="description">{tarea.descripcion}</p>
                    <button className="delete" onClick={()=> borrarTarea(tarea.id)} >Borrar</button>
                </article>
              )
            })
          }
          
  </>
  )
}
