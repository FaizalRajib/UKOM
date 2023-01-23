import React, {useEffect, useState}from 'react'
import './popular.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'


const Popular = () => {
  
  
  const [data, setData] = useState([])

  useEffect(() => {
    axios("https://63547f47e64783fa8285a355.mockapi.io/Destination")
    .then((res) => {
      setData(res.data)
    });
  }, []);

  // console.log(data);
  
      useEffect(() => {
        Aos.init({duration: 2000})
      }, [])
  
  return (
    <section className='popular section container'>
      <div className="secContainer">

        <div className="secHeader flex">
          <div data-aos='fade-right' data-aos-duration='2500' className="textDiv">
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>
              From historial cities to natural specteculars, come see the best of world!
            </p>
          </div>

          <div data-aos='fade-left' data-aos-duration='2500' className="iconsDiv flex">
              <BsArrowLeftShort className='icon leftIcon'/>
              <BsArrowRightShort className='icon'/>
          </div>
        </div>

        <div className="mainContent grid">
          {
            data.map(el =>{
              return(
                <div data-aos='fade-up' className="singleDestination" key={el.id}>
                  <div className="destImage">

                    <img src={el.imgSrc} alt="Image Title" />
                    <div className="overlayInfo">
                      <h3>{el.destTitle}</h3>
                      <p>
                        {el.location}
                      </p>

                      <BsArrowRightShort className='icon'/>
                    </div>

                  </div>

                  <div className="destFooter">
                    <div className="number">
                      0{el.id}
                    </div>

                    <div className="destText flex">
                      <h6>
                        {el.location}
                      </h6>
                      <span className='flex'>
                        <span className='dot'>
                          <BsDot className='icon'/>
                        </span>
                        {el.Tourism}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          }
          
          {/* {
            data.map(el =>{
              return(
                <div data-aos='fade-up' className="singleDestination" key={el.id}>
                  <div className="destImage">

                    <img src={el.imgSrc} alt="Image Title" />
                    <div className="overlayInfo">
                      <h3>{el.destTitle}</h3>
                      <p>
                        {el.location}
                      </p>

                      <BsArrowRightShort className='icon'/>
                    </div>

                  </div>

                  <div className="destFooter">
                    <div className="number">
                      0{el.id}
                    </div>

                    <div className="destText flex">
                      <h6>
                        {el.location}
                      </h6>
                      <span className='flex'>
                        <span className='dot'>
                          <BsDot className='icon'/>
                        </span>
                        {el.Tourism}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          } */}
        </div>

      </div>
    </section>
  )
}

export default Popular