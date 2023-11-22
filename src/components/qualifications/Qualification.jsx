import React, { useState } from 'react'
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section">
       <h2 className="section__title">Qualification</h2>
     <span className="section__subtitle">My Personel Details</span>

     <div className="qualification__container container">
     <div className="qualification__tabs">
  <div className={toggleState === 1 ? 
  "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
   onClick={() => toggleTab(1)}
  >
    <i className="uil uil-graduation-cap qualification__icon"></i> Education
  </div>

  <div className={toggleState === 2 ? 
  "qualification__button qualification__active button--flex" : 
  "qualification__button button--flex"}
  onClick={() => toggleTab(2)} >
    <i className="uil uil-briefcase-alt qualification__icon"></i>{""}
    Experience
  </div>
</div>
      <div className="qualification__sections">
      <div className={toggleState === 1 ? 
      "qualification__content qualification__content-active" : 
      "qualifications__content"}>
  <div className="qualification__data">
            <div>
              <h3 className="qualification__title">B.TECH</h3>
              <span className="qualification__subtitle">DR. A.P.J Abdul Kalam Technical University</span>
               <div className="qualification__calender">
                <i className="uil uil-calender-alt">

                </i> 2023 - Passout
               </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
        <div className="qualification__data">
          <div> </div>
          <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>

            <div>
              <h3 className="qualification__title">Full-Stack developer Trainee</h3>
              <span className="qualification__subtitle">Technoledge Eduresearch Pvt Ltd</span>
               <div className="qualification__calender">
                <i className="uil uil-calender-alt">

                </i> Completed 2022
               </div>
            </div>
            
          </div>

          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Backend development</h3>
              <span className="qualification__subtitle">Coursera</span>
               <div className="qualification__calender">
                <i className="uil uil-calender-alt">

                </i> Certification
               </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
        <div className="qualification__data">
          <div> </div>
          <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>

            <div>
              <h3 className="qualification__title">Frontend development using ReactJS, ES5</h3>
              <span className="qualification__subtitle">Coursera</span>
               <div className="qualification__calender">
                <i className="uil uil-calender-alt">

                </i> Certification
               </div>
            </div>
            
          </div>
        
        </div>

        <div className={toggleState === 2 ? 
      "qualification__content qualification__content-active" : 
      "qualifications__content"}>
        <div className="qualification__data">
            <div>
              <h3 className="qualification__title">12th Standard</h3>
              <span className="qualification__subtitle">Central Board of Secondary Education</span>
               <div className="qualification__calender">
                <i className="uil uil-calender-alt">

                </i> 2019 - Passout
               </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
        <div className="qualification__data">
          <div> </div>
          <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>

            <div>
              <h3 className="qualification__title">10th Standard</h3>
              <span className="qualification__subtitle">Central Board of Secondary Education</span>
               <div className="qualification__calender">
                <i className="uil uil-calender-alt">

                </i> 2017 - Passout  
               </div>
            </div>
            
          </div>

     
        
        </div>
      </div>
     </div>
    </section>
  )
}

export default Qualification
