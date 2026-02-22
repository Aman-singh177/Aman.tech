import React from 'react'
import './Home.css'
import linkedinIcon from '../../assets/linkedin (1).png'
import githubIcon from '../../assets/github.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import express from '../../assets/express.png'
import mongo from '../../assets/mongodb.png'

const Home = () => {
  return (
    <div className='main'> 
      <div className='home'>
        <div className="detail">
          <p className='greet'>Hello, I'm</p>
          <p className='name'>Aman  Singh</p>
          <p className='role'>Full-Stack Developer</p>
          <div className='btns'>
            <button className='cv btn'>Download CV</button>
            <button className="contact btn">Contact info</button>
          </div>
          <div className='icons'>
            <a href='https://www.linkedin.com/in/aman-singh-54435b252/' target='_blank' rel='noreferrer'>
              <img src={linkedinIcon} alt='LinkedIn' className='icon'/>
            </a>
            <a href='https://github.com/Aman-singh177' target='_blank' rel='noreferrer'>
            <img src={githubIcon} alt='LinkedIn' className='icon' />
            </a>
          </div>
        </div> 
        <div className="photo">
          <img src="https://avatars.githubusercontent.com/u/64252445?v=4" alt="Aman Singh" />
        </div>
      </div>
      <div className='tech-stack'>
        <div className='word'>
          <p>Tech-Stack</p> 
          <div className='line'></div>
        </div>

        <div className='tech-icons'>
          <div className='row'>
            <img src={html} alt="HTML" className='tech-icon' />
            <img src={css} alt="CSS" className='tech-icon' />
            <img src={js} alt="JavaScript" className='tech-icon' />
          </div>
          <div className='row'>
            <img src={express} alt="Express.js" className='tech-icon' />
            <img src={mongo} alt="MongoDB" className='tech-icon' />
            <img src={js} alt="JavaScript" className='tech-icon' />
          </div>
          <div className='row'>
            <img src={express} alt="Express.js" className='tech-icon' />
            <img src={mongo} alt="MongoDB" className='tech-icon' />
            <img src={js} alt="JavaScript" className='tech-icon' />
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Home
