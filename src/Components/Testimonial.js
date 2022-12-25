import React from 'react'
import './Style.css';

export default function Testimonial() {
  return (
    <>
    <>

  <section id="testimonial" className="testimonial">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Portfolio</h2>
        <p>Check out our beautifull testimonial</p>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul id="testimonial-flters">
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li>App</li>
            <li >Card</li>
            <li >Web</li>
          </ul>
        </div>
      </div>
      <div
        className="row testimonial-container"
     
      >
        <div className="col-lg-4 col-md-6 testimonial-item filter-app">
          <div className="testimonial-wrap">
            <img
              src="assets/img/portfolio/portfolio-1.jpg"
              className="img-fluid"
              alt=""
            />
            
           
          </div>
        </div>
        <div className="col-lg-4 col-md-6 testimonial-item filter-web">
          <div className="testimonial-wrap">
            <img
              src="assets/img/portfolio/portfolio-2.jpg"
              className="img-fluid"
              alt=""
            />
          
           
          </div>
        </div>
        <div className="col-lg-4 col-md-6 testimonial-item filter-app">
          <div className="testimonial-wrap">
            <img
              src="assets/img/portfolio/portfolio-3.jpg"
              className="img-fluid"
              alt=""
            />
            
          
          </div>
        </div>
        <div className="col-lg-4 col-md-6 testimonial-item filter-card">
          <div className="testimonial-wrap">
            <img
              src="assets/img/portfolio/portfolio-4.jpg"
              className="img-fluid"
              alt=""
            />
           
          
          </div>
        </div>
        <div className="col-lg-4 col-md-6 testimonial-item filter-web">
          <div className="testimonial-wrap">
            <img
              src="assets/img/portfolio/portfolio-5.jpg"
              className="img-fluid"
              alt=""
            />
            
           
          </div>
        </div>
        <div className="col-lg-4 col-md-6 testimonial-item filter-app">
          <div className="testimonial-wrap">
            <img
              src="assets/img/portfolio/portfolio-6.jpg"
              className="img-fluid"
              alt=""
            />
           
           
          </div>
        </div>
        <div className="col-lg-4 col-md-6 testimonial-item filter-card">
          <div className="testimonial-wrap">
            <img
              src="assets/img/portfolio/portfolio-7.jpg"
              className="img-fluid"
              alt=""
            />

        
          </div>
        </div>
        <div className="col-lg-4 col-md-6 testimonial-item filter-card">
          <div className="testimonial-wrap">
            <img
              src="assets/img/portfolio/portfolio-8.jpg"
              className="img-fluid"
              alt=""
            />
            
          </div>
        </div>
        <div className="col-lg-4 col-md-6 testimonial-item filter-web">
          <div className="testimonial-wrap">
            <img
              src="assets/img/portfolio/portfolio-9.jpg"
              className="img-fluid"
              alt=""
            />
           
          
          </div>
        </div>
      </div>
    </div>
  </section>
 
</>

    </>
  )
}
