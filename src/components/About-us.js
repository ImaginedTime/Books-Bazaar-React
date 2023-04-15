import React from 'react'
import '../styles/about-us.css'

export default function AboutUs() {
    return (
        <section id="about-us">
            <h1 className="section-header">About Us And Reviews</h1>
            <div className="about-container">
                <div className="about-stats">
                    <h2>Our Stats</h2>
                    <p><b><span className="animate">10</span>+</b> Years of Experience</p>
                    <p><b><span className="animate">50</span>k+</b> Books</p>
                    <p><b><span className="animate">10</span>k+</b> Satisfied Customers</p>
                </div>
                <div className="about-achievements">
                    <h2>Our Achievements</h2>
                    <ul>
                        <li>Awarded "Best Book Seller" in 2020</li>
                        <li>Featured in National Geographic Reader's magazine</li>
                        <li>Partnered with local communities for sustainable Books</li>
                    </ul>
                </div>
                <div className="about-reviews">
                    <h2>What Our Customers Say</h2>
                    <p className="customer-review">"The best book I have ever read. The guide was knowledgeable and friendly,
                        and the books were breathtaking. I would highly recommend this BookStore to anyone looking for
                        a memorable reading and books experience."</p>
                    <p className="customer-name">- Jane Doe</p>
                </div>
            </div>
        </section>
    )
}
