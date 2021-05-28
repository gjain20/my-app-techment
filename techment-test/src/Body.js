import React,{useState} from 'react'
import {Modal} from 'react-bootstrap'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import {CustomModalContext} from './context/CustomModalContext'



function Body() {
  const modalBar = React.useContext(CustomModalContext)
  const activeCreateForm = modalBar.activeCreateForm

  const currentModalScreen = () => {
    switch (activeCreateForm) {
      case 0:
        return <Step1 />
      case 1:
        return <Step2 />
      case 2:
        return <Step3 />
      case 3:
        return <Step4 />
      default:
        return null
    }
  }

  return (
    <Modal.Body>
        <div className="row">
        <div className="col-1"></div>
          <div className="col-10">{currentModalScreen()}</div>
        </div>
    </Modal.Body>
  )
}

export default Body
