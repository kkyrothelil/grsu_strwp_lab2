import React from 'react'
import HeaderCalendar from './HeaderCalendar'
import HeaderFilter from './HeaderFilter'
import './header.scss'

const Header = () => {
  return (
    <header className='header'>
      <HeaderCalendar/>
      <div className='header-title'>Today</div>
      <HeaderFilter/>
    </header>
  )
}

export default Header