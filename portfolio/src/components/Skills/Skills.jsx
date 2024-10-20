import React from 'react'
import '../../Styles/Skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id="skills">
      <p className="skillsTitle">What i do...</p><br />
      <p className="skillsDescription">Here are the skills that i have learnt through out my journey, kindly keep a track the list is dynamic.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet adipisci. Molestiae, quas explicabo! Blanditiis placeat officia magnam facere! Placeat atque ipsum expedita libero, vitae recusandae necessitatibus mollitia aliquid laudantium sed sequi dignissimos odit tenetur dicta! Libero totam accusamus dolorem impedit quia, praesentium sit ea autem ratione temporibus earum neque?</p>
      <div className="skillBars">
        <ul className='skillCard'>
          <img src={UIDesign} alt="" className="skillImg" />
          <div className="skillContents">
            <span className="skillName">UI/UX Design</span>
            <p className="skillContent">This is a demo text</p>
          </div>
        </ul>
        <ul className='skillCard'>
          <img src={WebDesign} alt="" className="skillImg" />
          <div className="skillContents">
            <span className="skillName">Website Design</span>
            <p className="skillContent">This is a demo text</p>
          </div>
        </ul>
        <ul className='skillCard'>
          <img src={AppDesign} alt="" className="skillImg" />
          <div className="skillContents">
            <span className="skillName">App Design</span>
            <p className="skillContent">This is a demo text</p>
          </div>
        </ul>
      </div>
    </section>
  )
}

export default Skills