import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterStatus } from '../../redux/actions/filterActions'

const HeaderFilter = () => {
  const [isActive, setIsActive] = useState(false)
  const [activeFilter, setActiveFilter] = useState('active')

  const dispatch = useDispatch()

  return (
    <div
      className={ isActive ? 'header-filter headerFilter headerFilter_active' : 'header-filter headerFilter'}
      onClick={() => setIsActive(!isActive)}
    >
      <span></span>
      <span></span>
      <span></span>
      <div className={ isActive ? "headerFilter-items headerFilter-items_active" : "headerFilter-items"}>
        <div
          className={ activeFilter === 'completed' ? "headerFilter-item headerFilter-item_active" : "headerFilter-item"}
          onClick={() => {
            setActiveFilter('completed')
            dispatch(setFilterStatus('completed'))
            }}
        >Completed</div>
        <div 
          className={ activeFilter === 'active' ? "headerFilter-item headerFilter-item_active" : "headerFilter-item"}
          onClick={() => {
            setActiveFilter('active')
            dispatch(setFilterStatus('active'))
          }}
        >In Progress</div>
        <div 
          className={ activeFilter === 'removed' ? "headerFilter-item headerFilter-item_active" : "headerFilter-item"}
          onClick={() => {
            setActiveFilter('removed')
            dispatch(setFilterStatus('removed'))
          }}
        >Removed</div>
      </div>
    </div>
  )
}

export default HeaderFilter