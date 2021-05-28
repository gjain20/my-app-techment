import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import Body from './Body'
import StepBar from './StepBar'
import {CustomModalContext} from './context/CustomModalContext'

function CustomModal() {
  const modalBar = React.useContext(CustomModalContext)

  const handleClick = () => {
    modalBar.setBarState({...modalBar, isOpen:true})
  }
  const closeModal = () => {
    modalBar.setBarState({...modalBar, isOpen:false})
  }
  return (
    <>
      <button onClick={handleClick}>Open Modal</button>

      {modalBar.isOpen && (
        <Modal
          className="custom-modal"
          show={modalBar.isOpen}
          onHide={closeModal}
          size={'xl'}
          aria-labelledby="contained-modal-title-vcenter"
          backdrop="static"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Add New Job 
            <Button variant="info" type="button" onClick={handleClick}>
              Bulk Job import
            </Button>
            </Modal.Title>
          </Modal.Header>
          <StepBar />
          <Body />
        </Modal>
      )}
    </>
  )
}

export default CustomModal;