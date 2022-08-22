import React from 'react'
import med2 from '../images/med2.jpg'
import art from '../images/art.jpg'
import law from '../images/law.jpg'
import account from '../images/account.jpg'
import { FaMaxcdn,FaUniversity, FaAutoprefixer,FaBuffer,FaChalkboard} from "react-icons/fa";

function Programgs2() {
  return (
   <section className='container'>
    <div className='row gy-4'>
        <div className='col-12'>
            <h1 className='ESS'>Programgs We Offer</h1>
            <div className='divider'></div>
            <h5>This catalogue is primarily for use by prospective students searching 
            <br/>for courses offered by the University of Nigeria, Nsukka, i.e. UNN Courses. </h5>
        </div>
        <div className='col-md-6 col-sm-6'>
                <img src={med2}alt=''height={'400px'} className='img-fliud'/>
                <h2>Faculty Of Science<FaMaxcdn size={50} color='green'/></h2>
                <h5> The Faculty of Sciences, University of Nigeria(Unn) was
                established in 1966.</h5>
    
        </div>
        <div className='col-md-6 col-sm-6'>
                <img src={art}alt=''height={'400px'} className='img-fliud'/>
                <h2> Faculty Of Art<FaAutoprefixer size={50} color="green" /></h2>
                <h5>The Department of Education accommodated all the programmes in
                Arts Education.</h5>
        </div>
    </div>
    <div className='row mt-3'>
        <div className='col-md-6 col-sm-6'>
        <img src={account}alt=''height={'400px'} className='img-fliud'/>
                <h2>Faculty Of Management Science<FaChalkboard size={50} color="green" /></h2>
                <h5>  The Department of Management Science, as it was originally known,
                was created in 1983.</h5>
        </div>
        <div className='col-md-6 col-sm-6'>
        <img src={law}alt=''height={'400px'} className='img-fliud'/>
                <h2>Law Faculty<FaBuffer size={50} color="green" /></h2>
                <h5>   The Department started in the undergraduate
                programme;ost-graduate programmes.</h5>
        </div>
    </div>
   </section>
  )
}

export default Programgs2