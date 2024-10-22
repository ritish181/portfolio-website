import React, { useState } from 'react'
import '../../Styles/Navbar.css'
import { Link } from 'react-scroll'

// importing Images
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import Menu from '../../assets/menu.png'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img className = "logo" src={logo} alt="logo" />
      <div className="desktopMenu">
        <Link activeClass='active' spy={true} to="intro" smooth duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' spy={true} to="skills" smooth duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' spy={true} to="works" smooth duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass='active' spy={true} to="client" smooth duration={500} offset={-50} className="desktopMenuListItem">Clients</Link>
      </div>
      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={ contactImg } alt="messageIcon" className="desktopMenuImg" />
        <p>Contact me</p>
      </button>

      <img className = "mobMenu" src={Menu} alt="menu" onClick={()=>setShowMenu(!showMenu)} />
      <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
        <Link activeClass='active' spy={true} to="intro" smooth duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Home</Link>
        <Link activeClass='active' spy={true} to="skills" smooth duration={500} className="listItem" onClick={()=> setShowMenu(false)}>About</Link>
        <Link activeClass='active' spy={true} to="works" smooth duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' spy={true} to="client" smooth duration={500} offset={-50} className="listItem" onClick={()=> setShowMenu(false)}>Clients</Link>
        <Link activeClass='active' spy={true} to="contact" smooth duration={500} offset={-50} className="listItem" onClick={()=> setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;