import React from 'react'
import './footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Dafirm</a>

      <ul className='permalinks'>
        <li><a href= '#'>Home</a></li>
        <li><a href = '#about'>About</a></li>
        <li><a href = '#experience'>Experience</a></li>
        <li><a href = '#portfolio'>Portfolio</a></li>
        <li><a href = '#contact'>contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href= "https://www.instagram.com/ayanfe_oyeniyi/" target="_blank"><FiInstagram/></a>
        <a href= "https://twitter.com/Dafirm_music" target='_blank'><IoLogoTwitter/></a>
        <a href= "https://www.facebook.com/phemmy.oyeniyi" target='_blank' s>< FaFacebook/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy;All right reserved. Developed by Dafirm  </small>
      </div>
    </footer>
  )
}

export default Footer