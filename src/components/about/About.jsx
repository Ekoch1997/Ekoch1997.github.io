import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {BsFillPatchCheckFill} from 'react-icons/bs'


const About = () => {
  return (
    <section id ="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        {/*<div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />

          </div>
  </div>*/}
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__card-icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card about__card-summary'>
            
              <article className='about__summary-details'>
                <BsFillPatchCheckFill className='about__summary-icon' />
                <div>
                  <h4>Analytical thinker with a strong work ethic dedicated to continual learning</h4></div>
              </article>
              <article className='about__summary-details'>
                <BsFillPatchCheckFill className='about__summary-icon' />
                <div>
                  <h4>Strong communicator with team-oriented mindset</h4></div>
              </article>
              <article className='about__summary-details'>
                <BsFillPatchCheckFill className='about__summary-icon' />
                <div>
                  <h4>Demonstrated leader involved on campus and within the community</h4></div>
              </article>
            </article>
          </div>

          {/*<a href="#contact" className='btn btn-primary'>Let's Talk</a>*/}
        </div>
      </div>
    </section>
  )
}

export default About