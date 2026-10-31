import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = ({ totalInscripciones }) => {
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
    </nav>
  )
}

export default NavBar
