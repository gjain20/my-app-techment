import React from 'react'
import {useState} from 'react'
import {Form, Button, Card, Tab, Tabs} from 'react-bootstrap'
import {CustomModalContext} from './context/CustomModalContext'
import {Step2Context} from './context/Step2Context'


function Step2() {
  const modalBar = React.useContext(CustomModalContext)
  const [key, setKey] = useState('data');
  const handleClick = () => {
    modalBar.setBarState({...modalBar, activeCreateForm: 2})
  }
  const {
    subject,
    email,
    sms,
    setEmail, 
    setSubject,
    setSms
  } = React.useContext(Step2Context)

  console.log("==", subject, email, sms)
return(
  <Form>
    <Card>
      <Card.Header>Email campiagn</Card.Header>
      <Card.Body>
        <Card.Title>Subject
          <input type="text" className="form-control subject-input" 
           onChange={e => {
            setSubject(e.target.value)
          }}
          value={subject}
          defaultValue={subject}
          />
        </Card.Title>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab eventKey="data" title="First Contact">
            <Form.Control as="textarea" rows={5}
            className="form-control subject-input ml-0"
            onChange={e => {
              setEmail(e.target.value)
            }}
            type="textarea"
            value={email}
            defaultValue={email}
          />
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header>Sms campiagn</Card.Header>
      <Card.Body>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
          <Tab eventKey="data" title="First Contact">
            <Form.Control as="textarea" rows={5}
            className="form-control subject-input ml-0"
            type="textarea"
            onChange={e => {
              setSms(e.target.value)
            }}
            value={sms}
            defaultValue={sms}
          />
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  
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