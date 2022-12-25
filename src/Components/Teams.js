import React from 'react'
import './Style.css';


export default function Teams() {
  return (
    <>


  <section id="team" className="team">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>Our team is always here to help</p>
      </div>
      <div className="row">
        <div
          className="col-xl-3 col-lg-4 col-md-6"
        
        >
          <div className="member">
            <img
              src="assets/img/team/team-1.jpg"
              className="img-fluid"
              id='team-images'
              alt=""
            />
           
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6"
         
        >
          <div className="member">
            <img
              src="assets/img/team/team-2.jpg"
              className="img-fluid"
              id='team-images'
              alt=""
            />
           
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6"
       
        >
          <div className="member">
            <img
              src="assets/img/team/team-3.jpg"
              className="img-fluid"
              id='team-images'
              alt=""
            />
            
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6"
          
        >
          <div className="member">
            <img
              src="assets/img/team/team-4.jpg"
              className="img-fluid"
              id='team-images'
              alt=""
            />
            
          </div>
        </div>
      </div>
    </div>
  </section>
  

    </>
  )
}
