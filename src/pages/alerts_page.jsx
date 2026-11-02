import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CAMPUS_OPTIONS, AREA_OPTIONS } from '../data/events_data'

// vista para configurar alertas personalizadas por area y campus
export const AlertsPage = ({ eventos, suscripcion, setSuscripcion }) => {
  const areasDisponibles = AREA_OPTIONS.filter((op) => op !== 'Todas')

  const [correo, setCorreo] = useState(suscripcion ? suscripcion.correo : '')
  const [campus, setCampus] = useState(suscripcion ? suscripcion.campus : 'Todos')
  const [areas, setAreas] = useState(suscripcion ? suscripcion.areas : [])
  const [canal, setCanal] = useState(suscripcion ? suscripcion.canal : 'Correo institucional')
  const [error, setError] = useState('')
  const [editando, setEditando] = useState(!suscripcion)

  const toggleArea = (nombreArea) => {
    if (areas.includes(nombreArea)) {
      setAreas(areas.filter((a) => a !== nombreArea))
    } else {
      setAreas([...areas, nombreArea])
    }
  }

  // valida datos basicos y guarda la suscripcion
  const guardarSuscripcion = (e) => {
    e.preventDefault()
    if (!correo.trim() || !correo.includes('@')) {
      setError('Ingresa un correo válido (ej: nombre@usm.cl).')
      return
    }
    if (areas.length === 0) {
      setError('Selecciona al menos un área de interés.')
      return
    }

    setError('')
    setSuscripcion({
      correo: correo.trim(),
      campus,
      areas,
      canal
    })
    setEditando(false)
  }

  const eliminarSuscripcion = () => {
    setSuscripcion(null)
    setCorreo('')
    setCampus('Todos')
    setAreas([])
    setCanal('Correo institucional')
    setEditando(true)
  }

  const eventosCoincidentes = suscripcion
    ? eventos.filter((ev) => {
        const calzaCampus = suscripcion.campus === 'Todos' || ev.campus === suscripcion.campus
        const calzaArea = suscripcion.areas.includes(ev.area)
        return calzaCampus && calzaArea
      })
    : []

  return (
    <div className='alerts-page'>
      <h2>Alertas por Área de Interés</h2>
      <p className='alerts-page__desc'>
        Configura qué tipos de charlas o actividades te interesan para recibir avisos sin llenarte de correos de otras sedes o carreras.
      </p>

      {suscripcion && !editando ? (
        <div className='alerts-page__active'>
          <h3>Tu suscripción está activa</h3>
          <p><strong>Contacto:</strong> {suscripcion.correo}</p>
          <p><strong>Canal de aviso:</strong> {suscripcion.canal}</p>
          <p><strong>Campus preferido:</strong> {suscripcion.campus}</p>
          <p><strong>Áreas seleccionadas:</strong> {suscripcion.areas.join(', ')}</p>

          <div className='alerts-page__actions'>
            <button type='button' onClick={() => setEditando(true)}>
              Modificar preferencias
            </button>
            <button
              type='button'
              className='alerts-page__btn-secondary'
              onClick={eliminarSuscripcion}
            >
              Cancelar suscripción
            </button>
          </div>

          <div className='alerts-page__matches'>
            <h4>Eventos actuales que coinciden con tus alertas ({eventosCoincidentes.length}):</h4>
            {eventosCoincidentes.length === 0 ? (
              <p>Por ahora no hay eventos publicados con esa combinación.</p>
            ) : (
              <ul>
                {eventosCoincidentes.map((ev) => (
                  <li key={ev.id}>
                    <Link to={`/evento/${ev.id}`}>{ev.titulo}</Link> - {ev.fecha} ({ev.campus})
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : (
        <form className='alerts-page__form' onSubmit={guardarSuscripcion}>
          <div className='alerts-page__field'>
            <label htmlFor='correo-alerta'>Correo institucional o personal:</label>
            <input
              id='correo-alerta'
              type='email'
              placeholder='ejemplo@usm.cl'
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>

          <div className='alerts-page__field'>
            <label htmlFor='campus-alerta'>Campus o sede de interés:</label>
            <select
              id='campus-alerta'
              value={campus}
              onChange={(e) => setCampus(e.target.value)}
            >
              {CAMPUS_OPTIONS.map((op) => (
                <option key={op} value={op}>
                  {op}
                </option>
              ))}
            </select>
          </div>

          <div className='alerts-page__field'>
            <label htmlFor='canal-alerta'>Medio de notificación:</label>
            <select
              id='canal-alerta'
              value={canal}
              onChange={(e) => setCanal(e.target.value)}
            >
              <option value='Correo institucional'>Resumen por correo</option>
              <option value='Comunidad de WhatsApp'>Aviso para grupo de WhatsApp</option>
            </select>
          </div>

          <div className='alerts-page__field'>
            <span className='alerts-page__label'>Áreas o carreras de interés:</span>
            <div className='alerts-page__checkboxes'>
              {areasDisponibles.map((item) => (
                <label key={item} className='alerts-page__check-item'>
                  <input
                    type='checkbox'
                    checked={areas.includes(item)}
                    onChange={() => toggleArea(item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          {error && <p className='alerts-page__error'>{error}</p>}

          <div className='alerts-page__actions'>
            <button type='submit'>Guardar suscripción</button>
            {suscripcion && (
              <button
                type='button'
                className='alerts-page__btn-secondary'
                onClick={() => {
                  setError('')
                  setEditando(false)
                }}
              >
                Cancelar cambios
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  )
}

export default AlertsPage
