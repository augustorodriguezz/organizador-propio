import React,{useState} from 'react'

export const Aside = ({setListadoState}) => {

  const [tareas, setTareas] = useState({
    titulo: '',
    descripcion:''
  })

  const guardarEnStorage = (clave, elemento)=>{
     //guardo el listado en el local storage
     let elementos = JSON.parse(localStorage.getItem(clave));
     if(Array.isArray(elementos)){
       elementos.push(elemento);
     }else{
       elementos = [elemento];
     }
     localStorage.setItem(clave, JSON.stringify(elementos));
     return elemento
  }

  const datosForm = (e) =>{
    e.preventDefault();
    //coonsigo los valores del form
    let titulo = e.target.titulo.value;
    let descripcion = e.target.descripcion.value;
    //creo el objeto con los datos
    let tarea = {
      id: new Date().getTime(),
      titulo, 
      descripcion
    }
    //actualizo el estado
    setTareas(tarea);
    //actualizo ahora el listado de elementos a mostrar en pantalla
    setListadoState( elementos => {
      return [...elementos, peli];
    });
    guardarEnStorage('tareas', tarea);
   
  }

 
  return (
    <aside className="lateral">
            <div className="add">
                <h3 className="title">Añadir película</h3>
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

