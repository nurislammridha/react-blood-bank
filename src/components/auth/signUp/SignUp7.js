import React from 'react'
import {Form, Button} from 'react-bootstrap'
const SignUp7 = ()=>{
 return(
     <>
     <div className="container">
       <div className="mt-5 invisible">rtgrt</div>
    <div className="row mt-5">
  <div className="col-sm-7">
    <h2 className="text-center mt-5"> <span className="text-danger mr-3">Blood</span>Donation</h2>
 <p className="text-center mt-3">Correct Birthdate give you</p>
 <p className="text-center">best experience with the</p>
 <p className="text-center">community.Don't hide it</p>
  </div>
  <div className="col-sm-5">
      <h1>Your Birth Date:</h1>
<Form>
  <Form.Group>
    <Form.Label>Select Birth Date</Form.Label>
    <Form.Control type="date" placeholder="Enter Birth Date" />
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
export default SignUp7;