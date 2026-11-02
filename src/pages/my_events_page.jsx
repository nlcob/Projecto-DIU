import React from 'react'
import { Link } from 'react-router-dom'

// vista para mostrar los eventos inscritos (meta 3: revisar y cancelar inscripciones)
export const MyEventsPage = ({ inscripciones = [], setInscripciones }) => {
  const cancelarInscripcion = (idEvento) => {
    if (setInscripciones) {
      setInscripciones(
        inscripciones.filter((ev) => String(ev.id ?? ev) !== String(idEvento))
      )
    }
  }

  return (
    <div className='my-events'>
      <h2>Mis Inscripciones</h2>
      {inscripciones.length === 0 ? (
        <div>
          <p>Todavía no te has inscrito en ningún evento.</p>
          <Link to='/'>Ir a la cartelera de eventos</Link>
        </div>
      ) : (
        <div>
          <p>Tienes {inscripciones.length} evento(s) inscrito(s).</p>

          <div className='my-events__list'>
            {inscripciones.map((ev) => (
              <div
                key={ev.id}
                className='my-events__item'
                style={{
                  borderTop: '1px solid #eee',
                  paddingTop: '12px',
                  marginTop: '12px'
                }}
              >
                <h3>
                  <Link to={`/evento/${ev.id}`}>{ev.titulo}</Link>
                </h3>
                <p><strong>Fecha:</strong> {ev.fecha}</p>
                <p><strong>Campus:</strong> {ev.campus}</p>
                <p><strong>Modalidad:</strong> {ev.modalidad}</p>
                <button
                  type='button'
                  onClick={() => cancelarInscripcion(ev.id)}
                >
                  Cancelar inscripción
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MyEventsPage
