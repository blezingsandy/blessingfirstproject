import React from 'react'
import makeup from '../images/makeup.jpg'
import mkup5 from '../images/mkup5.jpg'
import mkup2 from '../images/mkup2.jpg'
import mkup6 from '../images/mkup6.jpg'
import mkup from '../images/mkup.jpg'

function Blogs3() {
  return (
   <section className='container'>
    <div className='row mt-5 gy-3'>
        <div className='col-md-8 col-sm-6'>
            <img src={makeup}alt=''height={'400px'}width={'100%'}className='img-fliud'/>
            <h4 style={{paddingTop:'5%'}}>Everyday we make use of cosmetic or beauty products in one way or the other</h4>
            <h5>I'm Dimma, a beauty, fashion and lifestyle blogger living in Nigeria. My blog will give you an insight into my life as a Nigerian but most importantly it is
             a way for me to share some of my favorite things, beauty tips, travel and lifestyle. </h5>
        </div>
        <div className='col-md-4 col-sm-6 bg-light'style={{paddingTop:'2%'}}>
            <h3>Recent Posts</h3>
            <hr></hr>

            <div style={{display:'flex'}}>
            <img src={mkup5}alt=''width={'30%'}height={'100px'}className='img-fliud'/>
             <h5>Mac studio finish concealer - NW 40<br/> Mac brow pencil in spiked</h5>       
            </div>
            <div style={{display:'flex',paddingTop:'5%'}}>
            <img src={mkup2} alt=''width={'30%'}height={'100px'}className='img-fliud'/> 
            <h5>Mac Studio Sculpt mascara<br/> Beauty Kink  Lashes - Mama Di Mama</h5> 
            </div>
            <div style={{display:'flex',paddingTop:'5%'}}>
            <img src={mkup6}alt=''width={'30%'}height={'100px'}className='img-fliud'/>
            <h5>Kayge Cosmetics Lip Pencil Toast <br/> Selara Lipgloss - 85</h5>
            </div>
            <div style={{display:'flex',paddingTop:'5%'}}>
            <img src={mkup}alt=''width={'30%'}height={'100px'}className='img-fliud'/>
            <h5>Nars Radiant Creamy concealer -  Amande
<br/> Ben Nye powder</h5> 
            </div>
        </div>
    </div>
   </section>
  )
}

export default Blogs3