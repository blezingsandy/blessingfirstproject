import React from 'react'
import beach from '../images/beach.jpg'

function Blogs2() {
  return (
 <section className='container'>
    <div className='row mt-5'>
        <div className='col-md-8 col-sm-6 bg-light' style={{paddingTop:'1%'}}>
            <img src={beach}alt=''height={'400px'}width={'100%'}className='img-fliud'/>
            <h3 style={{paddingTop:'5%'}}>A place where Awareness encounter's inspiration! </h3>
            <h5>That dominion stars lights dominion divide years for fourth have don't 
            <br/>stars is that he earth it first without heaven in place seed it second morning saying.</h5>
        </div>
        <div className='col-md-4 col-sm-6 bg-light'>
            <div className='col-md-12 col-sm-6'style={{paddingTop:'4%'}}>
            <form class="d-flex bg-success">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div>
          <h3 style={{paddingTop:'10%'}}>Category</h3>
          <hr></hr>
          <h5 style={{paddingTop:'10%'}}>Resturant Food(37)</h5>
          <hr></hr>
          <h5 style={{paddingTop:'10%'}}>Travel News?(10)</h5>
          <hr></hr>
          <h5 style={{paddingTop:'10%'}}>Modern Technology(03)</h5>
          <hr></hr>
          <h5 style={{paddingTop:'10%'}}>Product(11)</h5>
          <hr></hr>
          <h5 style={{paddingTop:'10%'}}>Inpiration21</h5>
          <hr></hr>
          <h5 style={{paddingTop:'10%'}}>Health Car(21)09</h5>
          <hr></hr>
      </div>
            </div>
        </div>
    </div>
 </section>
  )
}

export default Blogs2