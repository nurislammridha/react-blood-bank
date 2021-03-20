import React from 'react'
import {Form, Button} from 'react-bootstrap'
const SignUp1 = ()=>{
 return(
     <>
     <div className="container">
       <div className="mt-5 invisible">rtgrt</div>
    <div className="row mt-5">
  <div className="col-sm-7">
    <h2 className="text-center mt-5"> <span className="text-danger mr-3">Blood</span>Donation</h2>
 <p className="text-center mt-3">Provide your real name for</p>
 <p className="text-center">Your Identity. Your Name will</p>
 <p className="text-center">be used for searched</p>
  </div>
  <div className="col-sm-5">
      <h1>Let Us Know About You</h1>
<Form>
  <Form.Group>
    <Form.Label>User Name</Form.Label>
    <Form.Control type="text" placeholder="Enter User Name" />
  </Form.Group>
    <Form.Group>
 <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter Email Address" />
  </Form.Group>
  <Form.Group>
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter Password" />
  </Form.Group>
  <a className="btn btn-danger d-block rounded-pill">
    Next
  </a>
 </Form>
  </div>
    </div>
    </div>
     </>
 )
}
export default SignUp1;