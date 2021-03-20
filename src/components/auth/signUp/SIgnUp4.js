import React from 'react'
import {Card} from 'react-bootstrap'
import weight from '../../images/weight.jpg'
const SignUp4 = ()=>{
 return(
     <>
     <div className="container">
       <div className="mt-5 invisible">rtgrt</div>
    <div className="row mt-5">
  <div className="col-sm-7">
    <h2 className="text-center mt-5"> <span className="text-danger mr-3">Blood</span>Donation</h2>
 <p className="text-center mt-3">Note:you can not donate</p>
 <p className="text-center">blood if you are under weight.</p>
 <p className="text-center">Minimum weight for</p>
 <p className="text-center">donation require 50KG</p>
  </div>
  <div className="col-sm-5">
      <h1>How Much Do you Weight?</h1>
<div className="row">
<div className="col-sm-6">
    <a className="">
<Card style={{ width: '100%' }}>
  <Card.Img variant="top" src={weight} />
  <Card.Body>
    <Card.Title> Under 50 KG </Card.Title>
    
  </Card.Body>
</Card>
</a>
</div>
<div className="col-sm-6">
    <a className="">
<Card style={{ width: '100%' }}>
  <Card.Img variant="top" src={weight} />
  <Card.Body>
    <Card.Title> UP 50 KG </Card.Title>
    
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
export default SignUp4;