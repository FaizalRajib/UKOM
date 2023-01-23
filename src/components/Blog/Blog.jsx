import React, {useEffect}from 'react'
import './blog.css'
import {BsArrowRightShort} from 'react-icons/bs'

import img1 from '../../assets/img/pexels-photo-11118959.jpeg'
import img2 from '../../assets/img/pexels-photo-2158014.jpeg'
import img3 from '../../assets/img/pexels-photo-138903.jpeg'
import img4 from '../../assets/img/pexels-photo-424684.jpeg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    postImage: img1,
    title: 'Beautiful Marocco, let us travel!',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, id fugiat nulla laborum ipsum voluptatibus.'
  },
  {
    id: 2,
    postImage: img2,
    title: 'Romantic moments',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, id fugiat nulla laborum ipsum voluptatibus.'
  },
  {
    id: 3,
    postImage: img3,
    title: 'Let us have adventure outside Tunisia',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, id fugiat nulla laborum ipsum voluptatibus.'
  },
  {
    id: 4,
    postImage: img4,
    title: 'Best Country',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, id fugiat nulla laborum ipsum voluptatibus.'
  }
]

const Blog = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='blog section container'>

      <div className="setContainer">
        <div className="secIntro">
          <h2 data-aos='fade-up' data-aos-duration='2000' className='secTitle'>
            Our Best Blog?
          </h2>
          <p data-aos='fade-up' data-aos-duration='2300'>
            An insight to the incredible experince in the world.
          </p>
        </div>

        <div className="mainContainer grid">
          {
            Data.map(el => {
              return(
                <div className="singlePost grid" key={el.id}>
                  <div data-aos='fade-up' data-aos-duration='2000' className="imgDiv">
                    <img src={el.postImage} alt="" />
                  </div>

                  <div data-aos='fade-up' data-aos-duration='3000' className="postDetails">
                    <h3>
                      {el.title}
                    </h3>
                    <p data-aos='fade-up' data-aos-duration='3500'>{el.desc}</p>
                  </div>

                  <a href="#" className='flex' data-aos='fade-up' data-aos-duration='4000'>
                    <BsArrowRightShort className='icon'/>
                    Read More 
                  </a>
                </div>
              )
            })
          }
          {/* <div className="singlePost grid">
            <div className="imgDiv">
              <img src="" alt="" />
            </div>

            <div className="postDetails">
              <h3>
                Title
              </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dicta.</p>
            </div>

            <a href="#" className='flex'>
              <BsArrowRightShort className='icon'/>
              Read More 
            </a>
          </div> */}
        </div>

      </div>
    </section>
  )
}

export default Blog