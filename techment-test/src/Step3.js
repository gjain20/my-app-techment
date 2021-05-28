import React from 'react'
import {Step3Context} from './context/Step3Context'
import {CustomModalContext} from './context/CustomModalContext'
import {Form, Button, Row, Col} from 'react-bootstrap'

function Step3() {
  const modalBar = React.useContext(CustomModalContext)
  const handleClick = () => {
    modalBar.setBarState({...modalBar, activeCreateForm: 3})
  }
  const {
    mustHaveKeyword,
    niceToHaveKeyword,
    educationPref,
    setMustHaveKeyword, 
    setNiceToHaveKeyword,
    setEducationPref
  } = React.useContext(Step3Context)
  console.log("=", mustHaveKeyword)
  return(
 
    <Form>
      <Row>
         <Col xs={12}>
          <Form.Group>
            <Form.Label>Must have keyword</Form.Label>
            <Form.Control as="textarea" rows={3}
              className="form-control"
              type="textarea"
              onChange={e => {
                setMustHaveKeyword([e.target.value])
              }}
              rows={4}
              value={mustHaveKeyword}
              defaultValue={mustHaveKeyword}
            />
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Form.Group>
            <Form.Label>Nice to have keywords</Form.Label>
            <Form.Control as="textarea" rows={3} 
              className="form-control"
              onChange={e => {
                setNiceToHaveKeyword(e.target.value)
              }}
              rows={4}
              value={niceToHaveKeyword}
              defaultValue={niceToHaveKeyword}
            />
  
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group>
            <Form.Label>Education prefrences</Form.Label>
            <Form.Check 
              type="checkbox" 
              label="Top 25 universities" 
              onChange={e => {
                setEducationPref(e.target.checked)
              }}
              checked={educationPref}
            />
            <Form.Check 
              type="checkbox" 
              label="Top 100 univesities" 
              onChange={e => {
                setEducationPref(e.target.checked)
              }}
              checked={educationPref}
            />
            <Form.Check 
              type="checkbox" 
              label="No preference" 
              onChange={e => {
                setEducationPref(e.target.checked)
              }}
              checked={educationPref}
            />
            <Form.Check 
              type="checkbox" 
              label="specify" 
              checked={educationPref}
            />
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group>
            <Form.Label>Company prefrences</Form.Label>
            <Form.Check 
              type="checkbox" 
              label="Industry leaders" 
              onChange={e => {
                setEducationPref(e.target.checked)
              }}
              checked={educationPref}
            />
            <Form.Check 
              type="checkbox" 
              label="Fortune 500" 
              onChange={e => {
                setEducationPref(e.target.checked)
              }}
              checked={educationPref}
            />
            <Form.Check 
              type="checkbox" 
              label="start-ups" 
              onChange={e => {
                setEducationPref(e.target.checked)
              }}
              checked={educationPref}
            />
            <Form.Check 
              type="checkbox" 
              label="No prefrence" 
              onChange={e => {
                setEducationPref(e.target.checked)
              }}
              checked={educationPref}
            />
            <Form.Check 
              type="checkbox" 
              label="specify" 
              checked={educationPref}
            />
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Form.Group>
            <Form.Label>Location prefrence</Form.Label>
            <Form.Check
              custom
              inline
              label="Anywhere in US"
              type="checkbox"
            />
          <Form.Check
            custom
            inline
            label="Specify"
            type="checkbox"
          />
  
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Form.Group>
            <Form.Label>Preferred Titles:</Form.Label>
            <Form.Control as="textarea" rows={3} 
              className="form-control"
              placeholder="seprated by comma"
              onChange={e => {
                setNiceToHaveKeyword([e.target.value])
              }}
              rows={4}
              value={niceToHaveKeyword}
              defaultValue={niceToHaveKeyword}
            />
  
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group>
            <Form.Label>Preferred Industries</Form.Label>
            <Form.Control as="select" custom className="form-control">
              <option>Accounting</option>
              <option>Animation</option>
              <option>Banking</option>
              <option>IT</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
  
    <Button variant="primary" type="button" onClick={handleClick}>
      Next
    </Button>
    <Button variant="secondary" type="button" onClick={handleClick}>
      Skip
    </Button>
  </Form>
  )
}
export default Step3;