import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Experience</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Portfolio</a></li>
        <li><a href='#'>Testimonials</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; Ethan Koch. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer