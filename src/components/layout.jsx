import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import EventDetailPage from '../pages/event_detail_page'
import MyEventsPage from '../pages/my_events_page'
import AlertsPage from '../pages/alerts_page'
import NavBar from '../components/nav_bar'
import { EVENTOS_USM } from '../data/events_data'

// componente principal con las rutas y estados globales
const Layout = () => {
  const [eventos] = useState(EVENTOS_USM)
  const [inscripciones, setInscripciones] = useState([])
  const [suscripcion, setSuscripcion] = useState(null)

  return (
    <BrowserRouter>
      <div className='layout'>
        <header className='layout__header'>
          <h1 className='layout__title'>Eventos USM</h1>
          <p className='layout__subtitle'>Portal de actividades y charlas para estudiantes</p>
        </header>
        <NavBar
          totalInscripciones={inscripciones.length}
          tieneSuscripcion={Boolean(suscripcion)}
        />
        <div className='layout__page'>
          <Routes>
            <Route
              path='/'
              element={<HomePage eventos={eventos} />}
            />
            <Route
              path='/evento/:id'
              element={
                <EventDetailPage
                  eventos={eventos}
                  inscripciones={inscripciones}
                  setInscripciones={setInscripciones}
                />
              }
            />
            <Route
              path='/mis-eventos'
              element={
                <MyEventsPage
                  eventos={eventos}
                  inscripciones={inscripciones}
                  setInscripciones={setInscripciones}
                />
              }
            />
            <Route
              path='/alertas'
              element={
                <AlertsPage
                  eventos={eventos}
                  suscripcion={suscripcion}
                  setSuscripcion={setSuscripcion}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
