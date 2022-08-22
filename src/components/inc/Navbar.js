import React from 'react'
import { FaGraduationCap} from "react-icons/fa";
import { Link } from 'react-router-dom';



function Navbar() {
  return (
  <section className='container-fliud'>
    <div className='row'>
      <div className='col-md-12'>
      <div>
        <nav class="navbar navbar-expand-lg myExp">
  <div class="container-fluid">
          <a class="nav-link active" aria-current="page" href="#">UNIVERSITY OF NIGERIA < FaGraduationCap size={50} color='white'/></a>
      
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/' class="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/about' class="nav-link active" href="#">About</Link>
        </li>
        <li class="nav-item">
          < Link to='/services' class="nav-link active">Services</Link>
        </li>
        <li class="nav-item">
          <Link to='/contact'class="nav-link active">Contact</Link>
        </li>
        <li class="nav-item">
          <Link to='/blog' class="nav-link active">Blog</Link>
        </li>
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
      </div>
    </div>
  </section>
  )
}

export default Navbar