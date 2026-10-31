import React from 'react'
import { useParams, Link } from 'react-router-dom'

// vista detalle del evento (aca falta completar la meta 2 y el boton para inscribirse)
export const EventDetailPage = ({ eventos }) => {
  const { id } = useParams()
  const evento = eventos.find((ev) => String(ev.id) === String(id))

  if (!evento) {
    return (
      <div className='event-detail'>
        <p>Evento no encontrado.</p>
        <Link to='/'>Volver a la cartelera</Link>
      </div>
    )
  }

  return (
    <div className='event-detail'>
      <Link to='/' className='event-detail__back'>
        &lt; Volver a la cartelera
      </Link>

      <div className='event-detail__box'>
        <h2>{evento.titulo}</h2>
        <p><strong>Área:</strong> {evento.area}</p>
        <p><strong>Fecha y hora:</strong> {evento.fecha} ({evento.hora})</p>
        <p><strong>Campus y lugar:</strong> {evento.campus} - {evento.lugar}</p>
        <p><strong>Modalidad:</strong> {evento.modalidad}</p>
        <p>{evento.descripcion}</p>
      </div>
    </div>
  )
}

export default EventDetailPage
