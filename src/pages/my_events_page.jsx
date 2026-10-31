import React from 'react'
import { Link } from 'react-router-dom'

// vista para mostrar los eventos inscritos (falta implementar meta 3)
export const MyEventsPage = ({ inscripciones }) => {
  return (
    <div className='my-events'>
      <h2>Mis Inscripciones</h2>
      {inscripciones.length === 0 ? (
        <div>
          <p>Todavía no te has inscrito en ningún evento.</p>
          <Link to='/'>Ir a la cartelera de eventos</Link>
        </div>
      ) : (
        <p>Tienes {inscripciones.length} evento(s) inscrito(s).</p>
      )}
    </div>
  )
}

export default MyEventsPage
