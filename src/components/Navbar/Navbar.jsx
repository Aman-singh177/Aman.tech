import React from 'react'
import './Navbar.css'

const Navbar = () => {
  const scrollDown = (sectionId) => {
    const section = document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({ behavior: 'smooth' }); // scrollIntoView is not a hook. It’s a built-in DOM method
    }
  }
  return (
    <div>
      <div className='navbar'>
      <div className='navbar-name'>Aman Singh</div>
      <div className='navbar-right'>
        <p onClick={() => scrollDown("about")} >About</p>
        <p onClick={() => scrollDown("projects")}>Projects</p>
        <p onClick={() => scrollDown("contact")}>Contact</p>
      </div>
      </div> 
    </div>
    // Note : () => scrollDown("about") prevents immediate execution. If we used scrollDown("about") directly, 
    // it would execute as soon as the component renders, which is not what we want. By using an arrow function,
    // we ensure that scrollDown is only called when the user clicks on the "About" link.
  )
}

export default Navbar

 
