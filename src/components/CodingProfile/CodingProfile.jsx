import React from 'react' 
import './CodingProfile.css'
import leetcode from '../../assets/leetcode1.png'
import codechef from '../../assets/codechef.png'
import gfg from '../../assets/gfg.png' 

const CodingProfile = () => {
  return (
    <div className='cprofile'>
        <p>Visit my</p>
        <p className='t1'>Coding Profile</p>
        <div className='profiles'>
            <div className='profile1'>
                <div className='s12'>
                    <img src={leetcode} alt='' className='img5'/>
                </div>
                <div className='divp'>
                    <p className='v12'>Leetcode</p> 
                    <a href="https://leetcode.com/u/amansingh17730/" target='_blank' rel="noopener noreferrer">
                        <button className='b12'>Profile Link</button>
                    </a>
                </div>
            </div>
            <div className='profile1'>
                <div className='s12'>
                    <img src={codechef} alt='' className='img5' />
                </div>
                <div className='divp'>
                    <p className='v12'>Codechef</p> 
                    <a href="https://www.codechef.com/users/troop_doves_66" target='_blank' rel="noopener noreferrer">
                        <button className='b12'>Profile Link </button>
                    </a>
                </div>
            </div>
            <div className='profile1'>
                <div className='s12'>
                    <img src={gfg} alt='' className='img5' />
                </div>
                <div className='divp'>
                    <p className='v12'>Geeksforgeeks</p>  
                    <a href="https://www.geeksforgeeks.org/profile/amansingu9tf" target='_blank' rel="noopener noreferrer">
                        <button className='b12'>Profile Link </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CodingProfile      
