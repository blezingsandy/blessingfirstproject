import React from 'react'
import librays from "../images/librays.jpg"

function LiBry() {
  return (
    <section className='container'>
        <div className='row mt-4'>
        <div className='col-md-12'>
        <img src={librays}alt=''width={'500px'} className='MED img-fliud'/>
    </div>
        </div>
        <div className='row mt-3'>
            <div className='col-md-12'>
            <p className='p3'>The Department of Library Science, as it was originally known, was created in 1983 
        as a response to repeated calls for more training opportunities for library and information professionals.  Subsequent changes in the name of the Department and degree nomenclature (from B.A.L.S/B.Sc.L.S. to B.L.I.S.) were effected to reflect current trends.  The foundation class of 18 undergraduate students graduated in 1987.  Since that time the department has grown considerably, with current undergraduate enrollment averaging 40-50 students per class. The undergraduate programme received full accreditation from NUC in 1999 and again in 2006.  Many graduates of the Department have risen to positions of leadership and are making significant contributions in a variety of libraries and allied institutions across the federation and beyond.  In 1995 the Department introduced postgraduate programmes leading to the Master’s and Ph.D. degrees in library and information science.  It has recently introduced a Post Graduate Diploma for those with first degrees in other disciplines.  The Department
        also offers Diploma and B.L.I.S. courses of study during the Sandwich programme.</p>
            </div>
        </div>
    </section>
  )
}

export default LiBry