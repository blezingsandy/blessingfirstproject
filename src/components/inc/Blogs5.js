import React from 'react'
import BBB from '../images/BBB.jpg'

function Blogs5() {
  return (
    <section className='container'>
        <div className='row mt-5'>
            <div className='col-md-8 col-sm-6'>
            <img src={BBB}alt=''height={'400px'}width={'100%'}className='img-fliud'/>
            <h3 style={{paddingTop:'5%'}}>The 2018 UNN SUG Freshers Night Which took place on the 16th of March 2018</h3>
            <h5>The event was attended by about 10,000 students ranging from 100 Level to 400 level and it was sponsored by University of Nigeria Nsukka (UNN) VC Prof. Benjamin
             Ozumba and SAYA Entertainment and Modeling Agency which is owned by Moses okoronkwo</h5>
            </div>
            <div className='col-md-4 col-sm-6 bg-light'></div>
        </div>
    </section>
  )
}

export default Blogs5