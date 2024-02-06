import React, { useEffect, useState } from 'react'
import './About.scss'
import {motion} from 'framer-motion';
import { images } from '../../constants';

const abouts = [
  {title: 'Frontend Development', description: 'I am good Frontend Developer', imgURL: images.about1},
  {title: 'backend Development', description: 'I am good backend developer', imgURL: images.about2},
  {title: 'fullstack Development', description: 'I am good fullstack developer', imgURL: images.about3},
  {title: 'freelancer', description: 'I am good freelancer', imgURL: images.about4}
]

const About = () => {
  return (
    <>
      <h2 className='head-text'>I Know That <span>Good Developement</span> <br />means <span>Good Business</span></h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: 'tween'}}
          className='app__profile-item'
          key={about.title + index}
          >
            <img src={about.imgURL} alt={about.title}/>
            <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About
