import React from 'react'
import '../styles/contact-us.css'

export default function ContactUs() {
    return (
        <section id="contact-us">
            <div className="contact-info">
                <h2 className="section-header">Contact Me</h2>
                <div className="location">
                    <i className="fa-solid fa-map-marker-alt"></i>
                    BR Ambedkar Hall of Residence, IIT Kharagpur, West Bengal, India - 721302
                </div>
                <div className="phone">
                    <i className="fa-solid fa-phone"></i>
                    7571053858
                </div>
                <div className="email">
                    <i className="fa-solid fa-envelope"></i>
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
