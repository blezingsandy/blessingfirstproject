import React from 'react'
import { FaUniversity,FaMobileAlt,FaMailBulk } from "react-icons/fa";

function Form2() {
  return (
   <section className='container'>
    <div className='row mt-5'>
        <div className='col-md-8 col-sm-6'>
            <input type={'text'} placeholder='Enter Massage' style={{height:'200px',width:'100%'}}/><br/><br/>
            <div class="col">
    <input type="text" class="form-control" size={70} placeholder="enter your name" aria-label="First name"/><br/><br/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="enter your subject" aria-label="Last name"/>
  </div> 
  <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-success">Sign in</button>
  </div>
</form>
        </div>
        <div className='col-md-4 col-sm-6'>
          <div style={{display:'flex'}}>
                     <FaUniversity size={50} color='green'/>
                     <h5>Buttonwood California<br/> Rosemead, CA 91889</h5>        
            </div>
            <div style={{display:'flex',paddingTop:'10%'}}>
            <FaMobileAlt size={50}color='green'/> 
            <h5>+25390387062978 mon-fri<br/> and time is 9am to 6pm</h5> 
            </div>
            <div style={{display:'flex',paddingTop:'10%'}}>
            <FaMailBulk size={50}color='green'/>
            <h5>Unn34@gmail.com Send <br/> us your query anytime!</h5> 
            </div>
            <div>
          </div>
        </div>
    </div>
   </section>
  )
}

export default Form2