import React from 'react'
import '../styles/home.css'
import bg4 from '../images/bg4.jpg'

export default function Home() {
    return (
        <section id='home'>
            <div className="part1">
                <div className="home-container">
                    <h1>Welcome to Our BookStore Website</h1>
                    <p>Explore the beauty of the books with us</p>
                    <a href="#best-sellers1" className="btn">Discover Books</a>
                </div>
            </div>

            <div className="part2">
                <div className="home-left">
                    <img src={bg4} alt="BookStore" />
                </div>
                <div className="home-right">
                    <h1>Discover the World of Books with Us</h1>
                    <p>Our Bookstore offers a wide range of books that kinders the interests of everyone.
                        From fictional adventures to self help and self improvement books, we have something for everyone.
                        Read books and create memories and skills that will last a lifetime.</p>
                </div>
            </div>
        </section>
    )
}
