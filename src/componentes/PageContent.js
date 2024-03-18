import { useEffect } from "react";
import React from 'react'

export const PageContent = ({title, pages, listadoState, setListadoState}) => {
  useEffect(()=> {
    console.log("componente del listado de tareas cargado!!");
    conseguirTareas();
  },[]);
 
  
  const conseguirTareas = () => {
    let tareas = JSON.parse(localStorage.getItem("tareas"));
    setListadoState(tareas);
    return tareas;
  }
  const borrarTarea = (id) => {
    //Conseguir peliculas almacenadas en el localStorage
    let tareasAlmacenadas = conseguirTareas();
    //Filtrar las peliculas para que elimine del array la que yo quiero 
    let nuevasTareas = tareasAlmacenadas.filter(tarea => tarea.id !== parseInt(id));
    //Actualizar el estado del listado
    setListadoState(nuevasTareas);
    //Actualizar los datos en el localStorage
    localStorage.setItem('tareas' , JSON.stringify(nuevasTareas));
  }

  // const selectedPage = pages.length > 0 ? pages[pages.length - 1] : null;
  return (
  <>
  <div>
  <h1>{title}</h1>
  </div>
    
    
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
