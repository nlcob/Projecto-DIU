import React from 'react'
import { Link } from 'react-router-dom'

// vista para revisar y cancelar eventos inscritos
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
          <p>Tienes {inscripciones.length} evento(s) registrado(s) en tu agenda.</p>

          <div className='my-events__list'>
            {inscripciones.map((ev) => (
              <div key={ev.id} className='my-events__item'>
                <h3>
                  <Link to={`/evento/${ev.id}`}>{ev.titulo}</Link>
                </h3>
                <p><strong>Fecha y hora:</strong> {ev.fecha} ({ev.hora})</p>
                <p><strong>Campus y lugar:</strong> {ev.campus} - {ev.lugar}</p>
                <p><strong>Modalidad:</strong> {ev.modalidad}</p>
                <button
                  type='button'
                  className='my-events__cancel-btn'
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
