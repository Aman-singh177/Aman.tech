import React from 'react'
import './Project.css'
import giti from '../../assets/giti.png'
import { useRef } from 'react'
import video2 from '../../assets/video2.mp4'
import video1 from '../../assets/video1.mp4' 
import communication from '../../assets/communication.png'

const Project = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = (e) => {
    e.target.play();
  }
  
  const handleMouseLeave = (e) => {
    e.target.pause();
    e.target.currentTime = 0;
  }
  return (
    <div className='project' id='projects'>
      <div className='project-text'>
        <p>Know About My Skills</p>
        <p className='project-title'>Projects</p>
      </div>
      <div className='project-all'>
        <div className='pcard1'>
          <div className='m1'>
            <img src={communication} alt='' className='project-img' width={850} height={570}/>
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
            <h2>Food Delivery Web App</h2>
            <p>
              I developed a full-stack Food Delivery Web Application that allows users to explore restaurants, add items 
              to their cart, and place orders smoothly.
              The platform includes user authentication, dynamic cart management, and real-time order handling to reflect a practical, real-world system.
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
            <video ref={videoRef} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}
              className='video1' muted>
              <source src={video1} type='video/mp4' />
            </video>
          </div>
          <div className='description'>
            <h2>AI Text to Image Generator</h2>
            <p>
              I built an AI-powered Text-to-Image Generator that converts user prompts into visually creative and meaningful images.
              The application processes natural language input and uses machine learning models to generate unique visuals based on the given description. 
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
