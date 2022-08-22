import React from 'react'
import prof from '../images/prof.jpg'

function Trusted() {
  return (
    <section className='container-fliud'>
        <div className='row mt-3 gy-1'>
        <div className='col-md-6  col-sm-6 bg-light'>
            <img src={prof}alt='' className='img-fluid mt-5'/>
        </div>
        <div className='col-md-6 col-sm-6 myExp'>
                  <h1 className='trust'>TRUSTED BY OVER <br></br> 6000+ STUDENTS</h1>
                  <p className='trs'>LearningI like the individual brilliant prowess the lecturers have and how they are eager to 
                    teach us these things.What I don’t like is the issue of more theory than practice.Some departme
                    nts weren’t able to go on fieldwork or excursions that related to their departments It was basically
                    more of the classroom which at some point became dull and boring to learn.</p>
                    <p className='trs'>Thirteen indicators were used to calculate University of Nigeria's overall Best
                       Global Universities rank.The Post UTME of UNN is often conducted prior to a new academic session.
                       This is to inform candidates that the University of Nigeria,
                       Nsukka (UNN) has a JAMB UTME cut-off mark before they can participate in the screening exercise.
                       To be eligible for the UNN Post UTME screening exercise, 
                       you be must score at least 180 in your UTME. Next,
                       you need at least 5 credit passes in your O-Level results, 
                       English language and Mathematics must be included.</p>
                       <h4 className='trust'>Jion Now</h4>
                       <hr className='trust'></hr>
                </div>
        </div>
    </section>
  )
}

export default Trusted