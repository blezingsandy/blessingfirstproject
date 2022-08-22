import React from 'react'
import teacher from "../images/teacher.jpg"
import "../css/style.css"

function Essential() {
  return (
    <section className='container-fluid'>
        <div className='row gy-3'>
            <div className='title col-12 mt-5 text-center'>
                <h1 className='ESS'>Expression</h1>
                <div className='divider'></div>
            </div>
            <div className='col-md-6 col-sm-6 bg-light' >
                <img src={teacher} alt='' className='img-fluid mt-5'/>
            </div>
            <div className='col-md-6 col-sm-6 myExp'>
                <h1 className='trust'>A COMPREHENSIVE TEACHING APRROACH</h1>
                    <p className='tr'> <span className='span'>A</span>dvance your career with our top Executive Education programs. Request a program guide.
                     Find your path to professional growth. Choose the Kellogg program that's right for you!
                     World-Renowned Faculty. Courses: Leadership, Growth, Innovation, Strategy, General Management, Finance, Governance, Marketing, Operations, Nonprofit.</p>
                    <p className='tr'> <span className='span'>O</span>pen programmes. We will test you, challenge you, encourage you and inspire you.
                      Download the open programmes brochure. All of our open programmes offer the same high-quality teaching 
                      from our world-leading, research-driven faculty. This might be through the experience of face-to-face
                       classes in Cambridge, in a real-time Live Online classroom .
                    </p>
                    <p className='tr'> <span className='span'>T</span>op-Ranked Business School Delivering World-Class Exec Programs.
                     Advancing Business Acumen. Renowned Faculty. For Individuals & Orgs. Executive Networking.
                    Courses: Competitive Advantage, Strategic Decision-Making, Practical Application,
                     Leadership & Teamwork.</p>
                     <strong className='l'>Learn More</strong>
                     <hr className='l'></hr>
                </div>
        </div>
    </section>
  )
}

export default Essential