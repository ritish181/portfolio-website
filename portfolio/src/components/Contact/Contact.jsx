import React from 'react'
import '../../Styles/Contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'


const Contact = () => {
  return (
    <section id="contactPage">
        <div id="client">
            <h2 className='clientHeading'>My Clients...</h2>
            <p className="clientContent">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut asperiores quas, repellendus corrupti nesciunt suscipit, beatae nihil cum culpa voluptatum obcaecati quidem soluta veritatis explicabo.
            </p>
            <div className="clientImgs">
                <img src={Walmart} alt="" className="clientImg" />
                <img src={Adobe} alt="" className="clientImg" />
                <img src={Microsoft} alt="" className="clientImg" />
                <img src={Facebook} alt="" className="clientImg" />
            </div>
        </div>
        <div id="contact">

        </div>
    </section>
  )
}

export default Contact