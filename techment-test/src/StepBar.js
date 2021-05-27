import React,{useState} from 'react'
import {Modal} from 'react-bootstrap'
import {CustomModalContext} from './context/CustomModalContext'


function StepBar() {
  const modalBar = React.useContext(CustomModalContext)
  const activeCreateForm = modalBar.activeCreateForm

  const stepClass = (step, className) => {
    let stepClass
      if (activeCreateForm > step) {
        stepClass = 'active'
      } else {
        if (activeCreateForm === step) {
          stepClass = `${className ? ` ${className}` : 'current'}`
        } else {
          stepClass = 'Inactive'
        }
      }
    return stepClass
  }

  const stepAction = (step) => {
    modalBar.handleChangeCreateForm(step)
  }

  const listItem = (step, label, className = '') => (
    <li
      onClick={() => stepAction(step)}
      className={stepClass(step, className)}
    >
      {label}
    </li>
  )
  
  return (
    <div className="container">
      <ul className="progressbar">
        {listItem(0, 'Job Details')}
        {listItem(1, 'First Communication')}
        {listItem(2, 'Wishlist')}
        {listItem(3, 'Complete')}

      </ul>
    </div>
  )
}

export default StepBar;