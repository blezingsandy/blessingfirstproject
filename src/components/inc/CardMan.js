import React from 'react'
import { Link } from "react-router-dom";
import { FaMaxcdn,FaUniversity, FaAutoprefixer,FaBuffer,FaChalkboard} from "react-icons/fa";


function CardMan() {
  return (
    <section className=' myExp2'>
    <div className="container">
      <div className="row mt-4 gy-4">
        <div className='col-12'>
        <h1 className="ESS">PROGRAMS WE OFFER</h1>
        <div className='divider'></div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div class="card">
            <h5 class="card-header"style={{backgroundColor:'green'}}>FACULTY OF MEDICAL SCIENCES</h5>
            <div class="card-body">
              <h5 class="card-title">
                Medical Sciences <FaMaxcdn size={50} color="green" />
              </h5>
              <p class="card-text">
                The Faculty of Medical Sciences, University of Nigeria was
                established in 1966.
              </p>
              <Link to="/MediCal" class="btn btn-success">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div class="card">
            <h5 class="card-header"style={{backgroundColor:'green'}}>FACULTY OF ART<br/> EDUCATION</h5>
            <div class="card-body">
              <h5 class="card-title">
                ART <FaAutoprefixer size={50} color="green" />
              </h5>
              <p class="card-text">
                The Department of Education accommodated all the programmes in
                Arts Education.
              </p>
              <Link to="/ArtStudents" class="btn btn-success">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div class="card">
            <h5 class="card-header"style={{backgroundColor:'green'}}>LIBRARY SCIENCE EDUCATION</h5>
            <div class="card-body">
              <h5 class="card-title">
                LIBRARY SCIENCE <FaBuffer size={50} color="green" />
              </h5>
              <p class="card-text">
                The Department of Library Science, as it was originally known,
                was created in 1983.
              </p>
              <Link to="/liBry"  class="btn btn-success">
                Read MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div class="card">
            <h5 class="card-header"style={{backgroundColor:'green'}}>COMPUTER <br/> EDUCATION</h5>
            <div class="card-body">
              <h5 class="card-title">
                CIVIL ENGINEERING <FaChalkboard size={50} color="green" />
              </h5>
              <p class="card-text">
                The Department started in the undergraduate
                programme;ost-graduate programmes.
              </p>
              <Link to="/civil" class="btn btn-success">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className='col-md-12'>
     <h1 style={{color:'white'}}>Welcome!!!!!</h1>
     </div>
      </div>
      </div>
  </section>
  )
}

export default CardMan