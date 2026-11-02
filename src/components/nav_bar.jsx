import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = ({ totalInscripciones, tieneSuscripcion }) => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }

  return (
    <nav className='nav-bar'>
      <NavLink className={navLinkClass} to='/' end>
        Cartelera de Eventos
      </NavLink>
      <NavLink className={navLinkClass} to='/mis-eventos'>
        Mis Inscripciones ({totalInscripciones})
      </NavLink>
      <NavLink className={navLinkClass} to='/alertas'>
        Alertas por Área {tieneSuscripcion ? '(Activa)' : ''}
      </NavLink>
    </nav>
  )
}

export default NavBar
