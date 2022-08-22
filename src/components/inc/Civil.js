import React from 'react'
import mkup3 from "../images/mkup3.jpg"
import chef from "../images/chef.jpg"
    
    function Civil() {
      return (
       <section className='container'>
        <div className='row mt-5'>
        <div className='col-md-12 col-sm-6'>
            <img src={chef} alt='' className='img-fliud'width={'500px'}/>
            <div style={{marginTop:'10px'}}>
            <p>The Department started in 1961/62 with the undergraduate programme;
             while the post-graduate programme was added in 1980/81. Over these years, the pursuit of excellence in both the undergraduate and postgraduate programmes remains the main thrust and emphases of the Department. From inception up to 1979/80, the Department offered four- and five- year programmes leading to the bachelor’s degree B.Sc in Civil Engineering.   By the decision of the Faculty Board of Engineering and with the popular support of the students the Bachelor of Science degree was changed to the Bachelor 
             of Engineering B.Eng degree in 1979/80 with the approval of the University Senate .</p>
            </div>
        </div>
        </div>
        <div className='row mt-2'>
          <div className='col-md-12 col-sm-6'>
          <img src={mkup3} alt='' className='img-fliud'width={'500px'}/>
           <div style={{marginTop:'10px'}}>
           <p>Over the years, necessary changes were made in the academic curriculum in order to make the programme
                more relevant to the needs of the society. Significant among such changes are the introduction of
                General Studies Courses; Computer Programming; Student Industrial Work Experience Scheme (SIWES); 
                Entrepreneurship; Water Resources and Environmental Engineering etc. With the advent of the National
                Universities Commission (NUC) benchmarks for minimum credit load and course content for Nigerian
                Universities, the Department complied as required in the curriculum. The current programme lays
                more emphasis on civil engineering courses from the 300-Level. The department is working towards
                updating the academic programme to meet the ever changing need of the society. Our new programme
                is currently with the curriculum approval committee of the University senate.
                </p>  
           </div>
          </div>
        </div>
       </section>
  )
}

export default Civil