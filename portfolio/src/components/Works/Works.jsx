import React from 'react'
import '../../Styles/Works.css'
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
    <section id='works'>
      <div className="workContent">
        <span className="workTitle">Portfolio...</span>
        <p className='workDescription'>This is just a demo text and here are the works that i have done throughout my journey with the technology.</p>
      </div>
      <div className="workCards">
        <img src={Portfolio1} alt="" className="workCard" />
        <img src={Portfolio2} alt="" className="workCard" />
        <img src={Portfolio3} alt="" className="workCard" />
        <img src={Portfolio4} alt="" className="workCard" />
        <img src={Portfolio5} alt="" className="workCard" />
        <img src={Portfolio6} alt="" className="workCard" />
      </div>
      <button className="workBtn">
        see more
      </button>
    </section>

  )
}

export default Works