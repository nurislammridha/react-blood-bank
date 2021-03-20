import React from 'react'
import {Form, Button} from 'react-bootstrap'
const SignIn = ()=>{
 return(
     <>
     <div className="container">
       <div className="mt-5 invisible">rtgrt</div>
    <div className="row mt-5">
  <div className="col-sm-7">
    <p className="mt-5 invisible">rt</p>
    <h2 className="text-center"> <span className="text-danger mr-3">Blood</span>Donation</h2>
  </div>
  <div className="col-sm-5">
<Form>
  <Form.Group>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group>
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <a className="btn btn-danger d-block">
    Submit
  </a>
  <a className="mt-1">Don't have an account?<span className="font-weight-bold">Sign Up</span></a>
</Form>
  </div>
    </div>
    </div>
     </>
 )
}
export default SignIn;