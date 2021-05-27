import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {CustomModalContext} from './context/CustomModalContext'

function Step2() {
  const modalBar = React.useContext(CustomModalContext)

  const handleClick = () => {
    modalBar.setBarState({...modalBar.barState, activeCreateForm: 2})
  }
return(
  <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  
  <Button variant="primary" type="button" onClick={handleClick}>
    Next
  </Button>
  <Button variant="secondary" type="button" onClick={handleClick}>
    Skip
  </Button>
</Form>
)
}
export default Step2;