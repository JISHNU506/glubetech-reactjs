import React from 'react'
import './Style.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Clients() {
    const handleDragStart = (e) => e.preventDefault();
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
       1592: { items: 4 },
       2160: { items: 5 }, 
        2728: { items: 6 },
        3296: { items: 7 },
    };
    
    const items = [
      <img  id="client-img" src="assets/img/clients/client-1.png" onDragStart={handleDragStart} role="presentation" />,
      <img   id="client-img"  src="assets/img/clients/client-2.png" onDragStart={handleDragStart} role="presentation" />,
      <img  id="client-img"  src="assets/img/clients/client-3.png" onDragStart={handleDragStart} role="presentation" />,
      <img  id="client-img"  src="assets/img/clients/client-4.png" onDragStart={handleDragStart} role="presentation" />,
      <img   id="client-img"   src="assets/img/clients/client-5.png" onDragStart={handleDragStart} role="presentation" />,
      <img  id="client-img"  src="assets/img/clients/client-6.png" onDragStart={handleDragStart} role="presentation" />,
      <img  id="client-img"  src="assets/img/clients/client-7.png" onDragStart={handleDragStart} role="presentation" />,
      <img   id="client-img"   src="assets/img/clients/client-8.png" onDragStart={handleDragStart} role="presentation" />,
      
    ];
     
  return (
   <>
   <>
  <section id="clients" className="clients section-bg">
    <div className="container1" data-aos="fade-up">
      <div className="section-title">
        <h2>Clients</h2>
        <p>They trusted us</p>
      </div>
      <div
        className="clients-slider swiper"
      
      >
        <div className="swiper-wrapper align-items-center">
         

         
          <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
         


        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  </section>
  {/* End Clients Section */}
</>









 
   </>
  )
}
