import React from 'react'
import {Form, Button} from 'react-bootstrap'
const SignUp3 = ()=>{
 return(
     <>
     <div className="container">
       <div className="mt-5 invisible">rtgrt</div>
    <div className="row mt-5">
  <div className="col-sm-7">
    <h2 className="text-center mt-2"> <span className="text-danger mr-3">Blood</span>Donation</h2>
 <p className="text-center mt-3">Your Blood group need to be</p>
 <p className="text-center">accurate.If you don't know</p>
 <p className="text-center">about it please contact </p>
 <p className="text-center">nearest hospital</p>
  </div>
  <div className="col-sm-5">
      <h1>Contact Information</h1>
   <div className="row">
   <div className="col-sm-3">
     <a className="btn btn-outline-danger rounded-circle">A+</a>
   </div>
   <div className="col-sm-3"> <a className="btn btn-outline-danger rounded-circle">A-</a></div>
   <div className="col-sm-3"> <a className="btn btn-outline-danger rounded-circle">B+</a></div>
   </div>
    <div className="row mt-3">
   <div className="col-sm-3"> <a className="btn btn-outline-danger rounded-circle">B-</a></div>
   <div className="col-sm-3"> <a className="btn btn-outline-danger rounded-circle">O+</a></div>
   <div className="col-sm-3"> <a className="btn btn-outline-danger rounded-circle">O-</a></div>
   </div>
    <div className="row mt-3">
   <div className="col-sm-3"> <a className="btn btn-outline-danger rounded-circle p-2">AB+</a></div>
   <div className="col-sm-3"> <a className="btn btn-outline-danger rounded-circle p-2"> AB-</a></div>
   <div className="col-sm-3"></div>
   </div>
  <a className="btn btn-danger d-block rounded-pill mt-3">
    Next
  </a>
 
  </div>
    </div>
    </div>
     </>
 )
}
export default SignUp3;