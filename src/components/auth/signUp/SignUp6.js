import React from 'react'
import {Form, Button} from 'react-bootstrap'
const SignUp6 = ()=>{
 return(
     <>
     <div className="container">
       <div className="mt-5 invisible">rtgrt</div>
    <div className="row mt-5">
  <div className="col-sm-7">
    <h2 className="text-center mt-5"> <span className="text-danger mr-3">Blood</span>Donation</h2>
 <p className="text-center mt-3">Please provide correct</p>
 <p className="text-center">Address. This information</p>
 <p className="text-center">will keep safe</p>
  </div>
  <div className="col-sm-5">
      <h1>Where Do You Live?</h1>
<Form>
  <Form.Group>
    <Form.Label>Street Address</Form.Label>
    <Form.Control type="text" placeholder="Enter Phone Number" />
  </Form.Group>
    <Form.Group>
 <Form.Label>City</Form.Label>
    <Form.Control type="text" placeholder="Enter Alternate Phone Number" />
  </Form.Group>
  <Form.Group>
    <Form.Label>Postal Code</Form.Label>
    <Form.Control type="text" placeholder="Enter Social Info" />
  </Form.Group>
  <a className="btn btn-danger d-block round-pill">
    Next
  </a>
 </Form>
  </div>
    </div>
    </div>
     </>
 )
}
export default SignUp6;