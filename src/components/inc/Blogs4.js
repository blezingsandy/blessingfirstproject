import React from 'react'
import mkup from '../images/mkup.jpg'
import blogs2 from '../images/blogs2.jpg'
import DJ from '../images/DJ.jpg'
import STORYS from '../images/STORYS.jpg'
import photo2 from '../images/photo2.jpg'
import photo from '../images/photo.jpg'
import med2 from '../images/med2.jpg'

function Blogs4() {
  return (
    <section className='container'>
    <div className='row mt-3 gy-5'>
        <div className='col-md-8 col-sm-6'>
            <img src={blogs2}alt=''height={'400px'}width={'100%'}className='img-fliud'/>
            <h3 style={{paddingTop:'5%'}}>Yasmine Hany X Unn Models Manegement</h3>
            <h5>That dominion stars lights dominion divide years for fourth have don't 
            <br/>stars is that he earth it first without heaven in place seed it second morning saying.</h5>
        </div>
        <div className='col-md-4 col-sm-6 bg-light'>
            <h3 style={{marginTop:'10px',paddingTop:'2%'}}>Instagram Feeds</h3>
            <hr></hr>

            <div style={{display:'flex'}}>
            <img src={mkup}alt=''width={'30%'}height={'100px'}className='img-fliud'style={{marginLeft:'10px'}}/>      
            <img src={photo2}alt=''width={'30%'}height={'100px'}className='img-fliud'style={{marginLeft:'10px'}}/>      
            <img src={photo}alt=''width={'30%'}height={'100px'}className='img-fliud'style={{marginLeft:'10px'}}/>      
            </div>
            <div style={{display:'flex',marginTop:'3%'}}>
            <img src={med2}alt=''width={'30%'}height={'100px'} className='img-fliud'style={{marginLeft:'10px'}}/>
            <img src={DJ}alt=''width={'30%'}height={'100px'}className='img-fliud'style={{marginLeft:'10px'}}/>
            <img src={STORYS}alt=''width={'30%'}height={'100px'}className='img-fliud'style={{marginLeft:'10px'}}/>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Blogs4