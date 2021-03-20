import React from 'react'
import {Card} from 'react-bootstrap'
import male from '../../images/male.jpg'
import female from '../../images/female.jpg'
const SignUp5 = ()=>{
 return(
     <>
     <div className="container">
       <div className="mt-5 invisible">rtgrt</div>
    <div className="row mt-5">
  <div className="col-sm-7">
    <h2 className="text-center mt-5"> <span className="text-danger mr-3">Blood</span>Donation</h2>
 <p className="text-center mt-3">Defining your gender will let</p>
 <p className="text-center">us know bring new features</p>
 <p className="text-center">for mothers health care</p>
  </div>
  <div className="col-sm-5">
      <h1>Select Your Gender</h1>
<div className="row">
<div className="col-sm-6">
    <a className="">
<Card style={{ width: '100%' }}>
  <Card.Img className="card-img" variant="top" src={male} />
  <Card.Body>
    <Card.Title> Male </Card.Title>
    
  </Card.Body>
</Card>
</a>
</div>
<div className="col-sm-6">
    <a className="">
<Card style={{ width: '100%' }}>
  <Card.Img className="card-img" variant="top" src={female} />
  <Card.Body>
    <Card.Title> Female </Card.Title>
    
  </Card.Body>
</Card>
</a>
</div>
</div>
  <a className="btn btn-danger d-block mt-3 rounded-pill">
    Next
  </a>

  </div>
    </div>
    </div>
     </>
 )
}
export default SignUp5;