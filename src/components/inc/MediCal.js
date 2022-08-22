import React from 'react'
import med from "../images/med.jpg"
import "../css/style.css"
import med2 from "../images/med2.jpg"
import med3 from "../images/med3.jpg"

function MediCal() {
  return (
    <div className='container-fliud'>
        <div className='row mt-5'>
        <div id="carouselExampleFade" class=" col-md-12 col-sm-6 carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={med2}class="d-block" alt="..." width={1000} height={500}className='img-fliud'/>
    </div>
    <div class="carousel-item">
      <img src={med}class="d-block w-90" alt="..." width={1000} height={500}className='img-fliud'/>
    </div>
    <div class="carousel-item">
      <img src={med3} class="d-block" alt="..." width={1000} height={500}className='img-fliud'/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        <div className='row mt-3'style={{marginRight:''}}>
          <div className='col-md-12 col-sm-6'>
          <p>Thanks for visiting the Faculty of Medical Sciences, College of Medicine,
             and University of Nigeria; since 1966. Although formal training of medical students did not start until after the civil war in 1970, we have grown tremendously from strength to strength.Our students’ population has increased from the first intake of sixty (60) students to a level that we now graduate on average of, one hundred and twenty (120) students every year. The number
             of Departments and sub-Departments have increased from initial four to twenty .</p>
             <p>The Faculty of Medical Sciences, University of Nigeria was established in 1966. Formal training of medical
             students did not start until after the civil war in 1970 when the first batch of medical students was admitted. The School operated under the laws of Eastern Region and East Central State of Nigeria until 1978 when the Federal Government of Nigeria promulgated the statute No. 2 of the University of Nigeria Act.
              This statute established the Faculty as an integral part of the University of Nigeria.</p>
          </div>
        </div>
    </div>
  )
}

export default MediCal