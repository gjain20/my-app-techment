import React from 'react'
import {Button} from 'react-bootstrap'
import {CustomModalContext} from './context/CustomModalContext'


function Step4() {
  const modalBar = React.useContext(CustomModalContext)

  const handleClick = () => {
    modalBar.setBarState({...modalBar.barState, isOpen: false})
  }
  return(
    <div style={{"text-align": "center"}}>
      <h3>You're all done!</h3>
      <p>You will recieve an email confirmation for your job post shortly.</p>
      <div className="btn-container">
        <Button variant="primary" type="button" onClick={handleClick}>
          Done
        </Button>
        <Button variant="primary" type="button">
          View Job Post
        </Button>
      </div>
    </div>
  )
}
export default Step4;