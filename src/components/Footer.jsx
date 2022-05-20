import React from 'react'
import logo from '../assets/logo-light.svg'
import fb from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import pinterest from '../assets/icon-pinterest.svg'
import inst from '../assets/icon-instagram.svg'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="shortly__footer box-div py-8">
        <div className='shortly__footer-links mt-6'>
          <div className="mx-auto md:ml-[5vw] mb-8">
            <img src={logo} alt="Logo" />
          </div>
          <div className="shortly__footer-nav">
            <p>Features</p>
            <nav>
              <a>Link Shortening</a>
              <a>Branded Links</a>
              <a>Analytics</a>
            </nav>
          </div>
          <div className="shortly__footer-nav">
            <p>Resources</p>
            <nav>
              <a>Blog</a>
              <a>Developers</a>
              <a>Support</a>
            </nav>
          </div>
          <div className="shortly__footer-nav">
            <p>Company</p>
            <nav>
              <a>About</a>
              <a>Our Team</a>
              <a>Careers</a>
              <a>Contact</a>
            </nav>
          </div>
        </div>

        <div className="shortly__footer-icons flex flex-row items-center justify-center">
          <img src={fb} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
          <img src={pinterest} alt="Pinterest" />
          <img src={inst} alt="Instagram" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
