import React from 'react'

export const Aside = () => {
  return (
    <aside className="lateral">
            <div className="add">
                <h3 className="title">Añadir película</h3>
                <form>
                    <input type="text" placeholder="Título"/>
                    <textarea placeholder="descripción"></textarea>
                    <input type="submit" value="guardar"/>
                </form>
            </div>
        </aside>
  )
}

