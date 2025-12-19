import React from 'react'
import './About.css'
import EducationIcon from '../../assets/Education.png'

const About = () => {
  return (
    <div className='main'>
      <div className='head'>
        <p>Get to Know More</p>
        <h1 className=''>About Me</h1>
      </div>
      <div className='detail-about'>
        <div>
          <img src='https://i.pinimg.com/736x/da/97/5d/da975d71539c035ac0261b015228ba0d.jpg' alt='img' className='image'/>
        </div>
        <div className='info-about'>
          <div className='cards'>
            <div className='expirence-card'>
              <img src={EducationIcon} alt='Experience' className='about-icon'/>
              <p className='title'>Experience</p>
              <p className='clr'>1.5 +years</p>
              <p className='clr'>Mern Stack Devlopment</p>
            </div>
            <div className='education-card'>
              <img src={EducationIcon} alt='Education' className='about-icon'/>
              <p className='title'>Education</p>
              <p className='clr'>B.Tech.(Undergrad)</p>
              <p className='clr'>Lovely Professional University</p>
            </div>
          </div>
          <div>
            <p>
              MERN Stack Developer proficient in MongoDB, Express.js, React.js, and Node.js, with
              experience in building scalable and efficient web applications. Strong problem-solving
              skills and a passion for creating innovative solutions.
            </p> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
