import React from 'react'
import './Header.scss'
import { images } from '../../constants' 
import {motion} from 'framer-motion'

const scaleVariant = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const linksAndIcons = [
  { icon: images.resume_icon, url: '../assets/michael_resume.pdf' },
  { icon: images.github_icon, url: 'https://github.com/michaelyoussef396' },
  { icon: images.linkedin_icon, url: 'https://www.linkedin.com/in/michael-youssef-93625327a/' },
  { icon: images.medium_icon, url: 'https://medium.com/@michaelyoussef396' },
];


const Header = () => {
  
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
      whileInView={{x: [-100, 0], opacity: [0,1] }}
      transition={{duration: 0.5}}
      className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cpm app__flex'>
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Michael</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p>Full-Stack Developer</p>
            <p>Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
      whileInView={{opacity: [0,1] }}
      transition={{duration: 0.5, delayChildren: 0.5}}
      className='app__header-img'
      >
        {linksAndIcons.map((linkAndIcon, index) => (
          <div className='circle-cmp app__flex' key={`icon-${index}`}>
            <a href={linkAndIcon.url} target="_blank" rel="noopener noreferrer">
              <img src={linkAndIcon.icon} alt='icon' />
            </a>
          </div>
        ))}
        <motion.img
        whileInView={{scaleX: [0,1] }}
        transition={{duration: 1, ease: 'easeInOut'}}
        className='overlay circle'
        src={images.circle}
        alt='background-circle'
        />

      </motion.div>

      <motion.div
      variant={scaleVariant}
      whileInView={scaleVariant.whileInView}
      className='app__header-circles'
      >
        {[images.sass, images.python, images.react].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Header
