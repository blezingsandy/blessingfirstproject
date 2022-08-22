import React from 'react'
import code from '../images/code.jpg'
import doc from '../images/doc.jpg'
import cafe2 from '../images/cafe2.jpg'
import view from '../images/view.jpg'
import camp from '../images/camp.jpg'
import cafe from '../images/cafe.jpg'

function TopStories() {
  return (
  <section className=''>
      <div className='container'>
        <div className='row mt-4 gy-3'>
            <div className='col-12'>
                 <h1 className='ESS'>TOP STORY'S</h1>
                 <div className='divider'></div>
            </div>
            <div className='col-md-4'>
                <img src={code}alt=''className='img-fliud'width={'400px'}height={'250px'}/><br/>
                <h4 className='ESS'>Unn Coders</h4>
            </div>
            <div className='col-md-4'>
            <img src={view}alt=''className='img-fliud'width={'400px'}height={'250px'}/><br/>
            <h4 className='ESS'>One Of The Best Places To Study In The Campus</h4>
            </div>
            <div className='col-md-4'>
            <img src={cafe2}alt=''className='img-fliud'width={'400px'}height={'250px'}/><br/>
            <h4 className='ESS'>Lecturers Meeting Hall</h4>
            </div>
            {/* <div className='col-md-3'>
            <img src={doc}alt=''/>
            </div> */}
        </div>
        <div className='row mt-4 gy-3'>
            <div className='col-md-4'>
                <img src={doc}alt=''className='img-fliud'width={'400px'}height={'250px'}/><br/>
                <h4 className='ESS'>Life Of A Unn Geologist</h4>
            </div>
            <div className='col-md-4'>
            <img src={cafe}alt=''className='img-fliud'width={'400px'}height={'250px'}/><br/>
            <h4 className='ESS'>Best Unn Student&Lecturers Resturant</h4>
            </div>
            <div className='col-md-4'>
            <img src={camp}alt=''className='img-fliud'width={'400px'}height={'250px'}/><br/>
            <h4 className='ESS'>Unn New Campus</h4>
            </div>
            {/* <div className='col-md-3'>
            <img src={doc}alt=''/>
            </div> */}
        </div>
      </div>
  </section>
  )
}

export default TopStories