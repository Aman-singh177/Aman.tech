import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'> 
      <div className="detail">
        <p className='greet'>Hello, I'm</p>
        <p className='name'>Aman Singh</p>
        <p className='role'>Full-Stack Developer</p>
        <div className='btns'>
          <button className='cv btn'>Download CV</button>
          <button className="contact btn">Contact info</button>
        </div>
        <div>

        </div>
      </div> 
      <div className="photo">
        <img src="https://avatars.githubusercontent.com/u/64252445?v=4" alt="Aman Singh" />
      </div>
    </div> 
  )
}

export default Home
