import React from 'react'
import art from '../images/art.jpg'

function ArtStudents() {
  return (
   <section className='container'>
    <div className='row mt-5'>
    <div className='col-md-12'>
    <img src={art} alt=''width={'500px'} className='MED img-fliud'/>
    <p className='p3'>The Department of Education accommodated all the programmes in Arts 
      Education, Science Education, Education Foundations and Social Science Education. On Monday, August 9, 1982, the Senate of the University of Nigeria, Nsukka approved the creation of the Department of Educational Foundations, Sub-department of Arts Education and Sub-department of Science Education. Although the sub-department of Arts Education was carved out of the Department of Education and Co-ordinators appointed every year to provide leadership to the young Sub-department, it became independent and functional in 1994. In 2005/2006 academic year, the University Senate 
      upgraded it to a full department, hence, the Department of Arts Education.</p>
      <p className='p3'>Right from its birth, the Department of Arts Education housed the following
       programmes: Comparative Education, Curriculum Studies, Educational Technology,
      Education combined with English, French, Fine and Applied Arts, History, Igbo/linguistics, Music and Religion. The Department awards B.A/Education degree. In 2007, a broadfield curriculum in Cultural and Creative Arts was developed and was approved by the Senate of the university. This programme was verified by the National Universities Commission in 2010 and approval granted to the Department to implement it in 2011. The first in-take of students into the programme was in 2012/13 academic session. Today the department has matured and the  core staff strength includes six (6) Professors, six (6) Senior
      Lecturers, four (4) Lecturer 1, four (4) Lecturer II, two (2) Graduate Assistants.</p>
</div>
    </div>
   </section>
  )
}

export default ArtStudents