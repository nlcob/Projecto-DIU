import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// vista detalle del evento con inscripcion y opcion para compartir
export const EventDetailPage = ({ eventos, inscripciones = [], setInscripciones }) => {
  const { id } = useParams()
  const [copiado, setCopiado] = useState(false)
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

  const textoCompartir = `${evento.titulo} - ${evento.fecha} (${evento.hora}) en ${evento.campus}, ${evento.lugar}.`

  // copia un resumen del evento para mandarlo a companeros
  const copiarResumen = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(`${textoCompartir} Link: ${window.location.href}`)
    }
    setCopiado(true)
    setTimeout(() => setCopiado(false), 3000)
  }

  const cuposDisponibles =
    evento.cupos !== null ? (yaInscrito ? evento.cupos - 1 : evento.cupos) : null

  const urlWhatsapp = `https://wa.me/?text=${encodeURIComponent(textoCompartir)}`

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

          <button
            type='button'
            className='event-detail__share-btn'
            onClick={copiarResumen}
          >
            Copiar info para compartir
          </button>

          <a
            href={urlWhatsapp}
            target='_blank'
            rel='noreferrer'
            className='event-detail__wa-link'
          >
            Compartir por WhatsApp
          </a>
        </div>

        {copiado && (
          <p className='event-detail__copied'>
            Información del evento copiada al portapapeles.
          </p>
        )}
      </div>
    </div>
  )
}

export default EventDetailPage
