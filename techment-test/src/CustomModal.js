import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import Body from './Body'
import StepBar from './StepBar'

function CustomModal() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <>
      <button onClick={handleClick}>Open Modal</button>

      {isOpen && (
        <Modal
          className="custom-modal"
          show={isOpen}
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