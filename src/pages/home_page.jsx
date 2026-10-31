import React, { useState } from 'react'
import { CAMPUS_OPTIONS, AREA_OPTIONS } from '../data/events_data'
import EventCard from '../components/event_card'

export const HomePage = ({ eventos }) => {
  const [busqueda, setBusqueda] = useState('')
  const [campus, setCampus] = useState('Todos')
  const [area, setArea] = useState('Todas')

  // reinicia todos los filtros
  const limpiarFiltros = () => {
    setBusqueda('')
    setCampus('Todos')
    setArea('Todas')
  }

  // filtra la lista de eventos por campus, area y texto
  const eventosFiltrados = eventos.filter((ev) => {
    const coincideCampus = campus === 'Todos' || ev.campus === campus
    const coincideArea = area === 'Todas' || ev.area === area

    const texto = busqueda.trim().toLowerCase()
    const coincideTexto =
      texto === '' ||
      ev.titulo.toLowerCase().includes(texto) ||
      ev.resumen.toLowerCase().includes(texto) ||
      ev.area.toLowerCase().includes(texto)

    return coincideCampus && coincideArea && coincideTexto
  })

  const hayFiltros = busqueda !== '' || campus !== 'Todos' || area !== 'Todas'

  return (
    <div className='home-page'>
      <h2 className='home-page__heading'>Buscar eventos universitarios</h2>

      <div className='home-page__filters'>
        <div className='home-page__field'>
          <label htmlFor='busqueda'>Palabra clave:</label>
          <input
            id='busqueda'
            type='text'
            placeholder='Ej: software, matemática, prácticas...'
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div className='home-page__field'>
          <label htmlFor='campus'>Campus o sede:</label>
          <select
            id='campus'
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

        <div className='home-page__field'>
          <label htmlFor='area'>Área de interés / Carrera:</label>
          <select
            id='area'
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            {AREA_OPTIONS.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
        </div>

        {hayFiltros && (
          <button
            type='button'
            className='home-page__clear-btn'
            onClick={limpiarFiltros}
          >
            Limpiar filtros
          </button>
        )}
      </div>

      <p className='home-page__count'>
        Mostrando {eventosFiltrados.length} de {eventos.length} eventos
      </p>

      {eventosFiltrados.length > 0 ? (
        <div className='home-page__grid'>
          {eventosFiltrados.map((ev) => (
            <EventCard key={ev.id} evento={ev} />
          ))}
        </div>
      ) : (
        <div className='home-page__empty'>
          <p>No se encontraron eventos con los filtros seleccionados.</p>
          <button type='button' onClick={limpiarFiltros}>
            Mostrar todos los eventos
          </button>
        </div>
      )}
    </div>
  )
}

export default HomePage
