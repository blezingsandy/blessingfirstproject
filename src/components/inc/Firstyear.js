import React from 'react'
import un2 from '../images/un2.jpg'
import blogs from '../images/blogs.jpg'
import librays from '../images/librays.jpg'
import med from '../images/med.jpg'

function Firstyear() {
  return (
    <footer>
        <div className='container'>
            <div className='row gy-5'>
                <div className='col-md-8 bg-light'>
                <h3>UNN First Year Clearance Documents <br/>& Procedures for New Students</h3>
                    <p style={{fontSize:'10px bold',color:'black'}}>First thing first, congratulations on your admission into UNN.
                     Welcome to the Den a place to restore the dignity of man.</p>
                     <img src={un2}alt='' width={'350px'}/><br/><br></br>
                     <h5>Students in the following Faculty do their first year clearance in UNEC Enugu Campus;</h5>
                     <ul style={{fontSize:'bold',color:'black'}}>
                        <li>Faculty of Law</li>
                         <li>Faculty of Business Administration</li>
                         <li>Faculty of Environmental Studies</li>
                     </ul>
                     <h3>UNN Clearance Documents for Fresh Students</h3>
                     <ol style={{color:'black',fontSize:'bold'}}>
                        <li>WAEC / SSCE / NECO / GCE ResultUTME Result (JAMB)</li>
                        <li>UNN Admission List</li>
                        <li>UNN School Fee Receipt Fee</li>
                        <li>Jamb Admission Letter</li>
                        <li>Letter of Attestation</li>
                        <li>Students Profile Slip</li>
                        <li>Local Government of Origin Certificate/Identification</li>
                        <li>Acceptance of Admission</li>
                        <li>Admission Notification Slip</li>
                        <li>Passport Photograph</li>
                        <li>Birth Certificate</li>
                        <li>UNN Post UTME Result</li>
                     </ol>
                     <hr></hr>
                     <h4>WELCOME TO UNN</h4>
                </div>
                <div className='col-md-4 myExp mt-5'>
                  <div>
                  <img width={'90%'} src={blogs}alt=''/>
                  </div>
                  <div style={{marginTop:'35px'}}>
                  <img width={'90%'} src={librays}alt=''/>
                  </div>
                  <div style={{marginTop:'35px'}}>
                  <img width={'90%'} src={med}alt=''/>
                  </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Firstyear