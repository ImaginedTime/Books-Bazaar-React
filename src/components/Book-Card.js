import React from 'react'
import '../styles/book-card.css'
import bg1 from '../images/bg1.jpg'
import bg2 from '../images/bg2.jpg'
import bg3 from '../images/bg3.jpg'
import bg4 from '../images/bg4.jpg'


export default function BookCard({img, title, author, description}) {
    return (
        <div className="book-card">
            <img src={img} alt="book 1" />
            <h3 className="book-card-title">{title}</h3>
            <p className="book-card-author">Author: {author}</p>
            <p className="book-card-description">{description}</p>

            <div className="book-card-link-container">
                <a href="#home" className="book-card-link">Learn More</a>
                <a href=".book-card" className="book-card-link add-button">Add +</a>
            </div>
        </div>
    )
}
