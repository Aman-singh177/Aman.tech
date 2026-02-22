import React from 'react'
import map from '../../assets/map.png'
import './Contact.css'
import mail from '../../assets/mail.png'

const Contact = () => {
  return (
    <div className='cont' id='contact'>
      <p className='j1'>Feel Free to </p>
      <p className='me1'>Contact Me</p>

      <div className='contact-info'>
        <div className='contact-card'>
            <div>
                <img src={map} alt='map' className='map'/>
            </div>
            <div className='address'>
                <p><b>Location</b></p>
                <p>Jalandhar, India</p>
            </div>
        </div>
        <div className='mail-info1'>
            <div> 
                <img src={mail} alt='email' className='map'/>
            </div>
            <div className='mail-info'>
                <p><b>Mail</b></p>
                <a href='amansingh17740@gmail.com'>amansingh17740@gmail.com</a>
            </div>
        </div>
      </div>
      <div className='middle1'>

      </div>
    </div>
  )
}

export default Contact