import React from 'react'
import logo from '../images/logo.jpg'
import blogs from '../images/blogs.jpg'
import blogs2 from '../images/blogs2.jpg'
import blogs3 from '../images/blogs3.jpg'
import { Link } from 'react-router-dom';
import {AiFillMail } from "react-icons/ai";
import { FaFacebook,FaLinkedinIn,FaInstagramSquare,FaYoutubeSquare,FaPenAlt,FaGlobeAfrica } from "react-icons/fa";
import { BsCalendar4Week,BsPersonCheck,BsFillChatRightTextFill,BsFillTelephoneInboundFill } from "react-icons/bs";

function CardWoman() {
  return (
     <section>
      <div className='container-fluid' style={{paddingTop:'30px',}}>
        <div className='row'>
          <div className='co-md-3'>
            <img src={logo} height='40px' alt='' style={{marginBottom:'30px',}}/>
            <h3 className='ESS'>UNIVERSITY</h3>
            <p className='' style={{color:'white'}}>OF NIGERIA NSUKA <br/>(UNN)</p>
            <div className='university'>
               <Link to='/'><FaFacebook size={'1.5rem'} color='white' style={{margin:'10px'}} /></Link>
               <Link to='/'><FaLinkedinIn size={'1.5rem'} color='white' style={{margin:'10px'}} /></Link>
               <Link to='/'><FaInstagramSquare size={'1.5rem'} color='white' style={{margin:'10px'}} /></Link>
               <Link to='/'><FaYoutubeSquare size={'1.5rem'} color='white' style={{margin:'10px'}} /></Link>
            </div>
          </div>
          
          <div className='col-md-4'>
            <h4 style={{padding:'30px',color:'white'}}>Recents From Blog</h4>
            <div className='footer-blog' style={{display:'flex'}}>
              <div className=''><img alt=''style={{height:'63px'}} src={blogs}/></div>
              <div className=''style={{paddingLeft:'20px'}}>
                <Link to='/blog' style={{textDecoration:'none', color:'white'}}>
                  <p>
                    Even the all-powerful point has no control about
                  </p>
                </Link>
                  <p style={{fontSize:'15px',marginTop:'-15px',color:'white'}}><BsCalendar4Week size={'0.7rem'} />1 Aug,2022 <BsPersonCheck style={{marginLeft:'10px'}}/>Admin <BsFillChatRightTextFill style={{marginLeft:'10px'}}/>99</p>
              </div>
            </div>
            <div className='footer-blog' style={{display:'flex'}}>
              <div className=''><img alt=''style={{height:'63px'}} src={blogs3}/></div>
              <div className=''style={{paddingLeft:'20px'}}>
                <Link to='/blog' style={{textDecoration:'none', color:'white'}}>
                  <p>
                    Even the all-powerful point has no control about
                  </p>
                </Link>
                  <p style={{fontSize:'15px',marginTop:'-15px',color:'white'}}><BsCalendar4Week size={'0.7rem'} />1 Aug,2022 <BsPersonCheck style={{marginLeft:'10px'}}/>Admin <BsFillChatRightTextFill style={{marginLeft:'10px'}}/>99</p>
              </div>
            </div>
            <div className='footer-blog' style={{display:'flex'}}>
              <div className=''><img alt=''style={{height:'63px'}} src={blogs2}/></div>
              <div className=''style={{paddingLeft:'20px'}}>
                <Link to='/blog' style={{textDecoration:'none', color:'white'}}>
                  <p>
                    Even the all-powerful point has no control about
                  </p>
                </Link>
                  <p style={{fontSize:'15px',marginTop:'-15px',color:'white'}}><BsCalendar4Week size={'0.7rem'} />1 Aug,2022 <BsPersonCheck style={{marginLeft:'10px'}}/>Admin <BsFillChatRightTextFill style={{marginLeft:'10px'}}/>99</p>
              </div>
            </div>
          </div>
          <div className='col-md-2 list'>
            <h4 style={{marginTop:'30px',color:'white'}}>Quick Links</h4>
            <ul>
              <li style={{marginTop:'35px',listStyle:'none',color:'white'}}><Link to='/' style={{textDecoration:'none',color:'white'}}></Link>Home</li>
              <li style={{marginTop:'35px',listStyle:'none',color:'white'}}><Link to='about' style={{textDecoration:'none',color:'white'}}></Link>About</li>
              <li style={{marginTop:'35px',listStyle:'none',color:'white'}}><Link to='/services' style={{textDecoration:'none',color:'white'}}></Link>Even</li>
              <li style={{marginTop:'35px',listStyle:'none',color:'white'}}><Link to='/contact' style={{textDecoration:'none',color:'white'}}></Link>Contact</li>
              <li style={{marginTop:'35px',listStyle:'none',color:'white'}}><Link to='/blog' style={{textDecoration:'none',color:'white'}}></Link>Blog</li>
            </ul>
          </div>
          <div className='col-md-3'>
           <h4 st yle={{marginTop:'30px',color:'white'}}>Have A Question</h4>
            <div className='row'style={{marginTop:'35px',color:'white'}}>
              <div className='col-md-4'><FaPenAlt/></div>
              <div className='col-md-8'>
                <p>University Of Nigeria</p>
              </div>
            </div>

            <div className='row'style={{marginTop:'35px',color:'white'}}>
              <div className='col-md-4'><BsFillTelephoneInboundFill/></div>
              <div className='col-md-8'>
                <p>+234 903-832-0098</p>
                <p>+234 702-902-2228</p>
              </div>
            </div>

            <div className='row'style={{marginTop:'35px',color:'white'}}>
              <div className='col-md-4'><AiFillMail/></div>
              <div className='col-md-8'>
                <p>unnnsuka34@gmail.com</p>
              </div>
            </div>

            <div className='row'style={{marginTop:'35px',color:'white'}}>
              <div className='col-md-4'><FaGlobeAfrica /></div>
              <div className='col-md-8'>
                <Link to='/'>www.universityofnigeriansuka.com</Link>
              </div>
            </div>
            

          </div>
        </div>
      </div>
     </section>
  )
}

export default CardWoman