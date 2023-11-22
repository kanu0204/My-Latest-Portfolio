import React from 'react'

const Info = () => {
  return (
   <div className="about__info grid">
    <div className="about__box">
    <i className="bx bx-award about__icon"></i>
      <h3 className="about__title">Xperience</h3>
      <span className="about__subtitle">Fresher</span>
    </div>
    <div className="about__box">
    <i className="bx bxs-briefcase about__icon" ></i>
      <h3 className="about__title">Completed</h3>
      <span className="about__subtitle">6 projects</span>
   </div>
   <div className="about__box">
   <i className="bx bx-support about__icon" ></i>
      <h3 className="about__title">Support</h3>
      <span className="about__subtitle">Online 24/7</span>
   </div>
   
   </div>
  )
}

export default Info
