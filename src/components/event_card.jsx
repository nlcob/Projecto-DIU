import React from 'react'
import { Link } from 'react-router-dom'

export const EventCard = ({ evento }) => {
  return (
    <div className='event-card'>
      <div className='event-card__badges'>
        <span className='event-card__area'>{evento.area}</span>
        <span className='event-card__modalidad'>{evento.modalidad}</span>
      </div>

      <h3 className='event-card__title'>{evento.titulo}</h3>

      <p className='event-card__info'>
        <strong>Fecha:</strong> {evento.fecha} ({evento.hora})
      </p>
      <p className='event-card__info'>
        <strong>Campus:</strong> {evento.campus}
      </p>

      <p className='event-card__resumen'>{evento.resumen}</p>

      <div className='event-card__footer'>
        <span className='event-card__requisito'>
          {evento.requiereInscripcion ? 'Requiere inscripción' : 'Entrada liberada'}
        </span>
        <Link to={`/evento/${evento.id}`} className='event-card__btn'>
          Ver detalles
        </Link>
      </div>
    </div>
  )
}

export default EventCard
