import React from 'react'
import logo from '../images/logo.jpg'
import blogs from '../images/blogs.jpg'
import blogs2 from '../images/blogs2.jpg'
import blogs3 from '../images/blogs3.jpg'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import {AiFillMail } from "react-icons/ai";
import { FaFacebook,FaLinkedinIn,FaInstagramSquare,FaYoutubeSquare,FaPenAlt,FaGlobeAfrica } from "react-icons/fa";
import { BsCalendar4Week,BsPersonCheck,BsFillChatRightTextFill,BsFillTelephoneInboundFill } from "react-icons/bs";

function Footer() {
  return (
    <section>
        <div className='contain-fluid down'>
            <div className='row'>
                <div className='col-md-3 col-sm-6 mt-5'style={{color:'white'}}>
                    <img src={logo} alt=''style={{height:'50px'}}className='img-fluid'/>
                    <h3 className='ESS'>UNIVERSITY</h3>
            <p className='' style={{color:'white'}}>OF NIGERIA NSUKA <br/>(UNN)</p>
            <div className='university'>
               <a href='https://www.facebook.com/sandraBlessing'className=''><FaFacebook size={30}/></a>
               <a href='https://www.youtube.com'className=''><FaYoutubeSquare size={30} color='red'/></a>
               <a href='https://www.instagram.com/blezing_sandy'className=''><FaInstagramSquare size={30} color='instagram color'/></a>
               <a href='https://www.linkedin.com'className=''><FaLinkedinIn  size={30}/></a>
            </div>
                </div>
                <div className='col-md-4 col-sm-6'style={{color:'white'}}>
                <h4 style={{padding:'30px',color:'white'}}>Recents From Blog</h4>
            <div className='footer-blog' style={{display:'flex'}}>
              <div className=''><img alt=''style={{height:'80px'}} src={blogs} className='img-fluid' /></div>
              <div className=''style={{paddingLeft:'20px'}}>
                <Link to='/blog' style={{textDecoration:'none', color:'white'}}>
                  <p>
                    Even the all-powerful point has no<br/> control about
                  </p>
                </Link>
                  <p style={{fontSize:'15px',marginTop:'-15px',color:'white'}}><BsCalendar4Week size={'0.7rem'} />1 Aug,2022 <BsPersonCheck style={{marginLeft:'10px'}}/>Admin 
                  <BsFillChatRightTextFill style={{marginLeft:'10px'}}/>311</p>
              </div>
            </div>
            <div className='footer-blog' style={{display:'flex'}}>
              <div className=''><img alt=''className='img-fluid' style={{height:'80px'}} src={blogs3}/></div>
              <div className=''style={{paddingLeft:'20px'}}>
                <Link to='/blog' style={{textDecoration:'none', color:'white'}}>
                  <p>
                    Even the all-powerful point has no <br/> control about
                  </p>
                </Link>
                  <p style={{fontSize:'15px',marginTop:'-15px',color:'white',fontStyle:'italic'}}><BsCalendar4Week size={'0.7rem'} />1 Aug,2022 <BsPersonCheck style={{marginLeft:'10px'}}/>Admin 
                  <BsFillChatRightTextFill style={{marginLeft:'10px'}}/>239</p>
              </div>
            </div>
            <div className='footer-blog' style={{display:'flex'}}>
              <div className=''><img alt=''style={{height:'80px'}} src={blogs2}/></div>
              <div className=''style={{paddingLeft:'20px'}}>
                <Link to='/blog' style={{textDecoration:'none', color:'white'}}>
                  <p>
                    Even the all-powerful point has no<br/> control about
                  </p>
                </Link>
                  <p style={{fontSize:'15px',marginTop:'-15px',color:'white'}}><BsCalendar4Week size={'0.7rem'} />1 Aug,2022 <BsPersonCheck style={{marginLeft:'10px'}}/>Admin
                   <BsFillChatRightTextFill style={{marginLeft:'10px'}}/>103</p>
              </div>
            </div>
                </div>
                <div className='col-md-2 col-sm-6'style={{color:'white'}}>
                <h4 style={{marginTop:'30px',color:'white'}}>Quick Links</h4>
            <ul>
              <NavLink to='/' style={{textDecoration:'none',color:'white'}}>Home</NavLink><br/><br/>
              <NavLink to='/About' style={{textDecoration:'none',color:'white'}}>About</NavLink><br/><br/>
              <NavLink to='/Services' style={{textDecoration:'none',color:'white'}}>Event</NavLink><br/><br/>
             <NavLink to='/Contact' style={{textDecoration:'none',color:'white'}}>Contact</NavLink><br/><br/>
              <NavLink to='/Blog' style={{textDecoration:'none',color:'white'}}>Blog</NavLink>
            </ul>
                </div>
                <div className='col-md-3 col-sm-6'style={{color:'white'}}>
                <h4 style={{marginTop:'30px',color:'white'}}>Have A Question</h4>
                <div className='row'style={{marginTop:'35px',color:'white'}}>
              <div className='col-md-4 col-sm-6'><FaPenAlt/></div>
              <div className='col-md-8 col-sm-6'>
                <p>University Of Nigeria</p>
              </div>
            </div>

            <div className='row'style={{marginTop:'35px',color:'white'}}>
              <div className='col-md-4 col-sm-6'><BsFillTelephoneInboundFill/></div>
              <div className='col-md-8 col-sm-6'>
                <p>+234 903-832-0098</p>
                <p>+234 702-902-2228</p>
              </div>
            </div>

            <div className='row'style={{marginTop:'35px',color:'white'}}>
              <div className='col-md-4 col-sm-6'><AiFillMail/></div>
              <div className='col-md-8 col-sm-6'>
                <p>unn34@gmail.com</p>
              </div>
            </div>

            
            <div className='row'style={{marginTop:'35px',color:'white'}}>
              <div className='col-md-4 col-sm-6'><FaGlobeAfrica /></div>
              <div className='col-md-8 c0l-sm-6'>
                <Link to='/'>UNN.com</Link>
              </div>
            </div>
                </div>
            </div>
        </div>
    </section>
   
  )
}

export default Footer