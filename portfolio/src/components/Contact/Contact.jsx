import React, { useRef } from 'react'
import '../../Styles/Contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'

import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wrl8py9', 'template_fdu8eva', form.current, {
        publicKey: 'uBlEbvgYlLThFoS4P',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
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
          <h2 className='contactHeading'>Contact Me...</h2>
          <p className="contactContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, earum.</p>

          <form onSubmit={sendEmail} className="contactForm" action="" ref={form}>
            <input required type="text" className="name" placeholder='Your Name' name='your_name'/>
            <input required type="email" className="email" placeholder='Your Email' name='your_email' />
            <textarea  className = "message" name="message" placeholder='Your Message' id="" rows={5}></textarea>
            <button type= "submit" value ="send" className="submitBtn">Submit</button>

            <div className="links">
              <img src={FacebookIcon} alt="" className="link" />
              <img src={TwitterIcon} alt="" className="link" />
              <img src={YoutubeIcon} alt="" className="link" />
              <img src={InstagramIcon} alt="" className="link" />
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact