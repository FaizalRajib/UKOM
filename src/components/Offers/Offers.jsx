import React, {useEffect, useState}from 'react'
import './offers.css'
import {MdKingBed,MdBathtub,MdAirportShuttle,MdLocationOn} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {BsArrowRightShort} from 'react-icons/bs'


import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'

const Offers = () => {

  const [offer, setOffer] = useState([])

  useEffect(() => {
    axios("https://63547f47e64783fa8285a355.mockapi.io/Offer")
    .then((res) => {
      setOffer(res.data)
    });
  }, []);
  
  
    useEffect(() => {
      Aos.init({duration: 2000})
    }, [])

  return (
    <section className='offer section container'>
      <div className="secContainer">
        <div data-aos='fade-up' data-aos-duration='2000'className="secIntro">
          <h2  className="secTitle">
            Special Offers
          </h2>
          <p>
            From historical cities to natural specteculars, come see the best of world!
          </p>
        </div>

        <div className="mainContent grid">

          {offer.map(el => {
            return(
              <div data-aos='fade-up' data-aos-duration='3100' className="singleOffer" key={el.id}> 
                <div className="destImage">
                  <img src={el.imgSrc} alt={el.destTitle} />

                  <span className="discount">
                    30% Off
                  </span>
                </div>

                <div className="offerBody">
                    <h2>{el.destTitle}</h2>
                    <div className="price flex">
                      <h4>
                        {el.price}
                      </h4>
                      <span className='status'>
                        For Rent
                      </span>
                    </div>

                    <div className="amenities flex">
                    
                      <div className="singleAmenity flex">
                        <MdKingBed className='icon'/>
                        <small>{el.fasilitas1}</small>
                      </div>

                      <div className="singleAmenity flex">
                        <MdBathtub className='icon'/>
                        <small>{el.fasilitas2}</small>
                      </div>
                      
                      <div className="singleAmenity flex">
                        <FaWifi className='icon'/>
                        <small>{el.fasilitas3}</small>
                      </div>
                      
                      <div className="singleAmenity flex">
                        <MdAirportShuttle className='icon'/>
                        <small>{el.fasilitas4}</small>
                      </div>

                    </div>

                    <div className="location flex">
                      <MdLocationOn className='icon'/>
                      <small>{el.Road}, {el.location}</small>
                    </div>

                    <button className='btn flex'>
                      View Details
                      <BsArrowRightShort className='icon'/>
                    </button>
                </div>
              </div>
            )
          })}
          {/* <div className="singleOffer"> 
            <div className="destImage">
              <img src={img} alt="Imaga Name" />

              <span className="discount">
                30% Off
              </span>
            </div>

            <div className="offerBody">
                <div className="price flex">
                  <h4>
                    Rp. 1.000.000
                  </h4>
                  <span className='status'>
                    For Rent
                  </span>
                </div>

                <div className="amenities flex">
                
                  <div className="singleAmenity flex">
                    <MdKingBed className='icon'/>
                    <small>2 Beds</small>
                  </div>

                  <div className="singleAmenity flex">
                    <MdBathtub className='icon'/>
                    <small>1 Bath</small>
                  </div>
                  
                  <div className="singleAmenity flex">
                    <FaWifi className='icon'/>
                    <small>WiFi</small>
                  </div>
                  
                  <div className="singleAmenity flex">
                    <MdAirportShuttle className='icon'/>
                    <small>Shuttle</small>
                  </div>

                </div>

                <div className="location flex">
                  <MdLocationOn className='icon'/>
                  <small>450 Vine#310, London</small>
                </div>

                <button className='btn flex'>
                  View Details
                  <BsArrowRightShort className='icon'/>
                </button>
            </div>
          </div> */}
          
        </div>  
      </div>
    </section>
  )
}

export default Offers