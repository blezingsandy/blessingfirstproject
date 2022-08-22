import React from 'react'
import management from '../images/management.jpg'
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Comprehensiv() {
  return (
    <section className='container-fliud'>
        <div className='row mt-3 gy-1'>
            <div className='title col-12 mt-3'>
                <h1 className='ESS'>ESSENTIAL RESOURCES</h1>
                <div className='divider'></div>
            </div>
            <div className='col-md-6 col-sm-6 bg-light'>
                <h5 className='ess'>Our Essential Resources Comprises Of Journals,Research Group,
                    Publication,International Collabrations,Adim Docs,Unn consult </h5>

                    <div className='table'>
                      <h3>FIRST YEAR STUDENTS</h3>
                      <NavLink to='/firstyear'><FaAngleRight size={50}color='green'/> </NavLink>
                    </div><br></br>

                    <div className='table'>
                    <h3>TUITION&FEES</h3>
                    <NavLink to='/tuition'><FaAngleRight size={50} color='green'/></NavLink>
                    </div>

                    <div className='table'>
                    <h3>INTERNATIONAL STUDENTS</h3>
      <NavLink to='/international'><FaAngleRight size={50} color='green'/></NavLink>  
                    </div>

            </div>
            <div className='col-md-6 col-sm-6'>
                <img src={management} alt='' className='img-fluid mt-5'/>
            </div>
        </div>
    </section>
  )
}

export default Comprehensiv