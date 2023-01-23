import React, {useEffect}from 'react'
import './footer.css'
import {SiYourtraveldottv} from 'react-icons/si'
import {ImFacebook} from 'react-icons/im'
import {AiFillInstagram,AiFillGithub} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">

          <div className="footerLogo">
            <a href="#" className="logo flex">
              <h1 className='flex' data-aos='fade-up' data-aos-duration='2000'>
                <SiYourtraveldottv className='icon'/>             
                Dot</h1>
            </a>
          </div>

          <div className="socials flex" data-aos='fade-up' data-aos-duration='2500'>
            <a href="#"><ImFacebook className='icon'/></a>
            <a href="#"><AiFillInstagram className='icon'/></a>
            <a href="#"><AiFillGithub className='icon'/></a>
            <a href="#"><BsTwitter className='icon'/></a>
            
          </div>
        </div>
        

        <div className="footerLinks" data-aos='fade-up' data-aos-duration='3000'>
          <span className="linkTitle">
            Information
          </span>

          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div className="footerLinks" data-aos='fade-up' data-aos-duration='3000'>
          <span className="linkTitle">
            Helpful Links
          </span>

          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Condition</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>

        <div className="footerLinks" data-aos='fade-up' data-aos-duration='3000'>
          <span className="linkTitle">
            Contact Us
          </span>
          <span className="phone">+62 *** - **** - ****</span>
          <span className="email">usernmae@gmail.com</span>

        </div>
      </div>
    </div>
    
  )
}

export default Footer