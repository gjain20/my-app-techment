import React from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {CustomModalContext} from './context/CustomModalContext'
import {Step1Context} from './context/Step1Context'


function Step1() {
  const modalBar = React.useContext(CustomModalContext)
  const handleClick = () => {
    modalBar.setBarState({...modalBar, activeCreateForm: 1})
  }
  const {
    name,
    title,
    location,
    description,
    musthave,
    nicetohave,
    email,
    referrals,
    money,
    setName,
    setTitle,
    setLocation,
    setMustHave,
    setDescription,
    setNiceToHave,
    setEmail,
    setReferrals,
    setMoney
  } = React.useContext(Step1Context)

  console.log("==1==", referrals)
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
          <Form.Control type="text" 
            onChange={e => {
              setLocation(e.target.value)
            }}
            value={location}
            defaultValue={location}
          />
        </Form.Group>
      </Col>
      <Col xs={12}>
        <Form.Group>
          <Form.Label>Job Description</Form.Label>
          <Form.Control as="textarea" rows={3}
            className="form-control"
            type="textarea"
            onChange={e => {
              setDescription(e.target.value)
            }}
            rows={4}
            value={description}
            defaultValue={description}
          />
        </Form.Group>
      </Col>
      <Col xs={12}>
        <Form.Group>
          <Form.Label>Must have skills</Form.Label>
          <Form.Control as="textarea" rows={3}
            className="form-control"
            type="textarea"
            onChange={e => {
              setMustHave(e.target.value)
            }}
            rows={4}
            value={musthave}
            defaultValue={musthave}
          />
        </Form.Group>
      </Col>
      <Col xs={12}>
        <Form.Group>
          <Form.Label>Nice to have skills</Form.Label>
          <Form.Control as="textarea" rows={3} 
            className="form-control"
            onChange={e => {
              setNiceToHave(e.target.value)
            }}
            rows={4}
            value={nicetohave}
            defaultValue={nicetohave}
          />

        </Form.Group>
      </Col>
      <Col xs={12}>
        <Form.Group>
          <Form.Label>Which Emails should the notifications for this job to sent to?</Form.Label>
          <Form.Control type="email" 
            onChange={e => {
              setEmail(e.target.value)
            }}
            rows={4}
            value={email}
            defaultValue={email}
          />

        </Form.Group>
      </Col>
      <Col xs={12}>
        <Form.Group>
          <Form.Check 
            type="checkbox" 
            label="This Job accepting referrals" 
            onChange={e => {
              setReferrals(e.target.checked)
            }}
            checked={referrals}
          />
          <Form.Label>If yes, what is the commision for the sucessful hire of a referred candidate? 
            <input type="text" 
              className="form-control money"
              placeholder="$"
              onChange={e => {
                setMoney(e.target.value)
              }}  
              value={money}
              defaultValue={money}
  
            />        
            </Form.Label>

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