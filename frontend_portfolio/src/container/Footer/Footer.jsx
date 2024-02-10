import React, { useState } from 'react'
import './Footer.scss'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <h2 className='head-text'>Take a coffe & chat with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:michaelyoussef396@gmail.com' className='p-text'>michaelyoussef396@gmail.com</a>
        </div>

        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel: +64 (433) 880 403' className='p-text'>+64 (433) 880 403</a>
        </div>
      </div>

      <div className='app__footer-form  app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' name='name' placeholder='Your Name' value={name} onChange={handleChangeinput} />
        </div>
        <div className='app__flex'>
          <input className='p-text' type='email' name='email' placeholder='Your Email' value={email} onChange={handleChangeinput} />
        </div>

        <div>
          <textarea
          className='p-text'
          placeholder='Your message'
          value={message}
          name={message}
          onChange={handleChangeinput}
          />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit} >Send Message</button>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__primarybg')
