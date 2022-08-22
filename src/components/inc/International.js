import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.jpg'
// import teacher3 from '../images/teacher3.jpg'
import { Link } from "react-router-dom";
import { FaMaxcdn,FaUniversity, FaAutoprefixer,FaBuffer,FaChalkboard} from "react-icons/fa";
import {FaBible,FaCopy,FaDiceD20} from "react-icons/fa";


function International() {
  return (
    <section>
    <div className=' container-fluid graph'>
        <div className='row'>
            <div className='col-md-12'>
                <img height={"200px"} src={logo}alt='' style={{marginTop:'10%'}}/>
            </div>
            <div className='col-md-12'>
                <h4 style={{color:'white'}}>NO NATION CAN PROSPER WITHOUT EDUCATION</h4>
            </div>
            <div className='col-md-12'>
               <NavLink to='/form'className='btn btn-dark'>Apply Now</NavLink>
            </div>
        </div>
    </div>
    {/* <div className='col-md-12'>
        <img src={teacher3} alt='' className='intern' style={{width:'100%',height:'700px'}}/>
    </div> */}
    <div className=' container-fluid graph'>
        <div className='row gy-2'>
        <div className="col-md-3 col-sm-6">
          <div class="card">
            <h5 class="card-header" style={{backgroundColor:'limegreen'}}>FACULTY OF MEDICAL<br/> SCIENCES</h5>
            <div class="card-body">
              <h5 class="card-title">
                Medical Sciences <FaMaxcdn size={50} color="green" />
              </h5>
              <p class="card-text">
                The Faculty of Medical Sciences, University of Nigeria was
                established in 1966 2022/2023(unn).
              </p>
              <Link to="/Medstudent" class="btn btn-success">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div class="card">
            <h5 class="card-header"style={{backgroundColor:'limegreen'}}>FACULTY OF ART<br/> EDUCATION</h5>
            <div class="card-body">
              <h5 class="card-title">
                ART <FaAutoprefixer size={50} color="green" />
              </h5>
              <p class="card-text">
                The Department of Education accommodated all the programmes in
                Arts Education.
              </p>
              <Link to="/ArtStudent" class="btn btn-success">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div class="card myExp">
            <h5 class="card-header myExp"style={{backgroundColor:'limegreen'}}>LIBRARY SCIENCE<br/> EDUCATION</h5>
            <div class="card-body">
              <h5 class="card-title">
                LIBRARY SCIENCE <FaBuffer size={50} color="green" />
              </h5>
              <p class="card-text">
                The Department of Library Science, as it was originally known,
                was created in 1983.
              </p>
              <Link to="/Library"  class="btn btn-success">
                Read MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div class="card">
            <h5 class="card-header"style={{backgroundColor:'limegreen'}}>COMPUTER <br/> EDUCATION</h5>
            <div class="card-body">
              <h5 class="card-title">
                CIVIL ENGINEERING <FaChalkboard size={50} color="green" />
              </h5>
              <p class="card-text">
                The Department started in the undergraduate
                programme;ost-graduate programmes.
              </p>
              <Link to="/Civil" class="btn btn-success">
                Read More
              </Link>
            </div>
          </div>
        </div>
        </div>
    </div>
    
    </section>
  )
}

export default International