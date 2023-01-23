import React, {useEffect}from 'react'
import './about.css'
import img1 from '../../assets/img/lovepik-woman-hiking-icon-free-vector-illustration-png-image_401474125_wh1200.png'
import img2 from '../../assets/img/433100.png'
import img3 from '../../assets/img/69-695889_dealer-hotline-customer-service-vector.png'

import video from '../../assets/video/Kotor - 31484.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='about section'>
      <div className="secContainer">
        <h3 className="title">
          Why Hikings?
        </h3>

        <div className="mainContent container grid">
          <div data-aos='fade-up' data-aos-duration='2000' className="singleItem">
            <img src={img1} alt="" />

            <h3>100+ Mountains</h3>
            <p>
              Research shows that a chace to break away from the normal rhythms of daily life reduces stress and impoves health and well-being.
            </p>
            
          </div>

          <div data-aos='fade-up' data-aos-duration='2500' className="singleItem">
            <img src={img2} alt="" />

            <h3>11000+ Mountains</h3>
            <p>
              Research shows that a chace to break away from the normal rhythms of daily life reduces stress and impoves health and well-being.
            </p>
            
          </div>

          <div data-aos='fade-up' data-aos-duration='2500' className="singleItem">
            <img src={img3} alt="" />

            <h3>11000+ Mountains</h3>
            <p>
              Research shows that a chace to break away from the normal rhythms of daily life reduces stress and impoves health and well-being.
            </p>
            
          </div>
          
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div data-aos='fade-right' data-aos-duration='2000' className="cardText">
              <h2>Wonderful House experience nin there</h2>
              <p>
                The adventure submarking is based on an equally weighted average of scores from five countrty.
              </p>
            </div>

            <div data-aos='fade-left' data-aos-duration='2000' className="cardVideo">
              <video src={video} autoPlay loop muted type='video/mp4'></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About