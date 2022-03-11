import React from 'react'

const HeaderCalendar = () => {

  const date = new Date()
  const dateString = date.toDateString().split(' ')
  const month = dateString[1]
  const day = dateString[2]

  return (
    <div className='header-calendar headerCalendar'>
      <div className="headerCalendar-month">{month}</div>
      <div className="headerCalendar-day">{day}</div>
    </div>
  )
}

export default HeaderCalendar