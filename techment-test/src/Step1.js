import React from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {CustomModalContext} from './context/CustomModalContext'
import {Step1Context} from './context/Step1Context'


function Step1() {
  const modalBar = React.useContext(CustomModalContext)
  const {
    name,
    title,
    setName,
    setTitle
  } = React.useContext(Step1Context)

  console.log("==1==", name, title)
  const handleClick = () => {
    modalBar.setBarState({...modalBar.barState, activeCreateForm: 1})
  }
return(
 
  <Form>
    <Row>
      <Col xs={7}>
        <Form.Group>
          <Form.Label>Company Name</Form.Label>
          <input
            className="form-control"
            type="text"
            onChange={e => {
              setName(e.target.value)
            }}
            value={name}
            defaultValue={name}
          />
        </Form.Group>
      </Col>
      <Col xs={5}>
        <Form.Group>
          <Form.Label>Company Logo</Form.Label>
          <Button variant="info" type="button" className="ml-0 mr-4">
            upload Png File
          </Button>
          <span style={{"color":"#7077A2", "font-size": "14px"}}>No file choosen</span>
        </Form.Group>
      </Col>
      <Col xs={6}>
        <Form.Group>
          <Form.Label>Position Title</Form.Label>
          <input
            className="form-control"
            type="text"
            onChange={e => {
              setTitle(e.target.value)
            }}
            value={title}
            defaultValue={title}
          />
        </Form.Group>
      </Col>
      <Col xs={6}>
        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Col>
      <Col xs={12}>
        <Form.Group>
          <Form.Label>Job Description</Form.Label>
          <Form.Control as="textarea" rows={4}  />
        </Form.Group>
      </Col>
    </Row>

  <Button variant="primary" type="button" onClick={handleClick}>
    Next
  </Button>
</Form>
)
}
export default Step1;