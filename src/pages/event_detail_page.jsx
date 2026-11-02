import React from 'react'
import { useParams, Link } from 'react-router-dom'

// vista detalle del evento e inscripcion
export const EventDetailPage = ({ eventos, inscripciones = [], setInscripciones }) => {
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

  const yaInscrito = inscripciones.some(
    (item) => String(item.id ?? item) === String(evento.id)
  )

  const manejarInscripcion = () => {
    if (!yaInscrito && setInscripciones) {
      setInscripciones([...inscripciones, evento])
    }
  }

  const cuposDisponibles =
    evento.cupos !== null ? (yaInscrito ? evento.cupos - 1 : evento.cupos) : null

  return (
    <div className='event-detail'>
      <Link to='/' className='event-detail__back'>
        &lt; Volver a la cartelera
      </Link>

      <div className='event-detail__box'>
        <h2>{evento.titulo}</h2>
        <p><strong>Área:</strong> {evento.area}</p>
        <p><strong>Organizador:</strong> {evento.organizador}</p>
        <p><strong>Fecha y hora:</strong> {evento.fecha} ({evento.hora})</p>
        <p><strong>Campus y lugar:</strong> {evento.campus} - {evento.lugar}</p>
        <p><strong>Modalidad:</strong> {evento.modalidad}</p>
        <p>
          <strong>Requisito de inscripción:</strong>{' '}
          {evento.requiereInscripcion ? 'Requiere inscripción previa' : 'Entrada liberada'}
        </p>
        {evento.cupos !== null && (
          <p>
            <strong>Cupos disponibles:</strong> {cuposDisponibles} de {evento.cupos}
          </p>
        )}
        <p><strong>Descripción:</strong> {evento.descripcion}</p>

        <div className='event-detail__actions'>
          {yaInscrito ? (
            <p className='event-detail__status'>
              <strong>Estado:</strong>{' '}
              {evento.requiereInscripcion
                ? 'Ya estás inscrito en este evento.'
                : 'Evento guardado en tu agenda.'}{' '}
              <Link to='/mis-eventos'>Ver mis inscripciones</Link>
            </p>
          ) : (
            <button type='button' onClick={manejarInscripcion}>
              {evento.requiereInscripcion
                ? 'Inscribirme en este evento'
                : 'Guardar en mis eventos'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default EventDetailPage
