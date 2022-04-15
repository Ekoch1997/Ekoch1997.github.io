import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/nathan-held.jpg'

//import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

//Import Swper sytles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  {
    avatar: AVTR1,
    name: 'Nathan Held',
    review: 'Few people possess the tenacity and passion that Ethan has. For four years, Ethan and I have worked with each other in business ventures, club leadership roles, class projects, and entrepreneurial competitions throughout our time at Saint Louis University. Through each of these projects, Ethan’s most valuable traits shone through. Specifically, his indomitable self-motivation and unwavering determination are irreplaceable in any team.'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from peers</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      //install Swiper modules
      modules={[Navigation,Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      //navigation
      pagination={{clickable: true}}
      >
        {
          data.map(({avatar,name,review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={AVTR1} alt={name}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
        
        
      </Swiper>
    </section>
  )
}

export default Testimonials