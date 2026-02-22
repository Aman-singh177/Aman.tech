import React from 'react'
import './Project.css'
import giti from '../../assets/giti.png'
import { useRef } from 'react'
import video2 from '../../assets/video2.mp4'

const Project = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }
  return (
    <div className='project' id='projects'>
      <div className='project-text'>
        <p>Know About My Skills</p>
        <p className='project-title'>Projects</p>
      </div>
      <div className='project-all'>
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
            <div className='code-live'>
              <button className='code-btn'>
                <p className='s12'>Code</p> 
                <img src={giti} alt=''   />
              </button> 
              <button className='code-btn'>
                <p className='s12'>Live</p>
                <img src={giti} alt=''  />
              </button>
            </div>
          </div>
        </div> 
        <div className='pcard1'>
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
          <div className='pcard-content'>
            <video ref={videoRef} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}
              className='video2' muted>
              <source src={video2} type='video/mp4' />
            </video>
          </div>
        </div> 
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
