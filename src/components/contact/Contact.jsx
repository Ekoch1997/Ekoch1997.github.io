import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    e.target.reset();
    emailjs.sendForm('service_ngfi9of', 'template_7wxua3n', form.current, 'u8PFy7OnaQJZHZgVQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id ="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ekoch1997@gmail.com</h5>
            <a href='mailto:ekoch1997@gmail.com' target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Ethan Koch</h5>
            <a href='https://m.me/ethan.koch.94' target='_blank'>Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact