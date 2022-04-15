import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'

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
            <article className='about__card'>
              <FiUsers className='about__card-icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <BsFolderCheck className='about__card-icon' />
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>
          <p>
          Analytical thinker with a strong work ethic dedicated to continual learning
          </p>

          {/*<a href="#contact" className='btn btn-primary'>Let's Talk</a>*/}
        </div>
      </div>
    </section>
  )
}

export default About