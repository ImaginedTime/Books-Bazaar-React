import React from 'react'
import '../styles/contact-us.css'
import location from '../images/location.png'
import phone from '../images/phone.png'
import mail from '../images/mail.png'

export default function ContactUs() {

// $(".contact-info").css("height", $(".contact-us-inputs-container").height() + "px");
    // document.querySelector(".contact-info").style.height = document.querySelector(".contact-us-inputs-container").offsetHeight + "px";


    return (
        <section id="contact-us">
            <div className="contact-info">
                <h2 className="section-header">Contact Me</h2>
                <div className="location">
                    <img src={location} alt="location" />
                    BR Ambedkar Hall of Residence, IIT Kharagpur, West Bengal, India - 721302
                </div>
                <div className="phone">
                    <img src={phone} alt="phone" />
                    7571053858
                </div>
                <div className="email">
                    <img src={mail} alt="mail" />
                    udayomsrivastava111@gmail.com
                </div>
            </div>

            <div className="contact-us-inputs-container">
                <h2 className="section-header">Get In Touch</h2>
                <h4 className="suggestion">Feel free to drop me a line below</h4>
                <div className="inputs-container">
                    <input type="name" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <input type="textareax" placeholder="Type Your Message Here..." />
                    <input type="button" value="Send" />
                </div>
            </div>
        </section>
    )
}
