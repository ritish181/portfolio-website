import React from 'react'
import '../../Styles/Intro.css'
import BG from '../../assets/image.png'
import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Ritish</span><br />Webiste Designer</span>
            <p className="introPara">I am a skilled web designer with ecperience in creating<br/> visually appealing and user friendly ebistes.</p>
            <Link><button className="btn"><img className = "btnImg" src={btnImg} alt="" />Hire me</button></Link>
        </div>  
        <img src={BG} alt="" className="bg" />
    </section>
  )
}

export default Intro