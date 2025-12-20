import React from 'react'
import './Project.css'
import giti from '../../assets/giti.png'

const Project = () => {
  return (
    <div className='project'>
      <div className='project-text'>
        <p>Know About My Skills</p>
        <p className='project-title'>Projects</p>
      </div>
      <div>
        <div className='pcard1'>
          <div className='pcard-content'>

          </div>
          <div className='description'>
            <h2>Real Time Communication System</h2>
            <p>Designed and implemented a real-time communication platform with WebRTC and Socket.io, enabling 
              secure peer-to-peer video calls. Optimized connection lifecycle and performance for a smooth 
              user experience.
            </p>
            <div className='desc-stack'>
              <div className='s1'>
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>React.js</p> <br/>
              </div>
              <div className='s2'>
                <p>Node.js</p>
                <p>Express.js</p>
                <p>Socket.io</p>
                <p>Webrtc</p>
              </div>
            </div>
            <div>
              <div className='code-btn'>
                <p>Code</p> 
                <img src={giti} alt=''  />
              </div> 
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Project
