import React from 'react'
import '../../Styles/Navbar.css'
import { Link } from 'react-scroll'

// importing Images
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className = "logo" src={logo} alt="logo" />
      <div className="desktopMenu">
        <Link to="intro" smooth duration={500} className="desktopMenuListItem">Home</Link>
        <Link to="skills" smooth duration={500} className="desktopMenuListItem">About</Link>
        <Link to="works" smooth duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link to="skills" smooth duration={500} className="desktopMenuListItem">Clients</Link>
      </div>
      <button className='desktopMenuBtn'>
        <img src={ contactImg } alt="messageIcon" className="desktopMenuImg" />
        <p>Contact me</p>
      </button>
    </nav>
  )
}

export default Navbar;