import React from 'react'
import '../styles/book-card.css'
import bg1 from '../images/bg1.jpg'
import bg2 from '../images/bg2.jpg'
import bg3 from '../images/bg3.jpg'
import bg4 from '../images/bg4.jpg'


export default function BookCard({img, title, author, description}) {
    function handleAddClick(e) {
        let elem = e.target;
        let content = elem.innerHTML;
        if (content == "Add +") {
            elem.innerText = "Added";
            elem.style.backgroundColor = "#4f4";
        }
        else {
            elem.innerText = "Add +";
            elem.style.backgroundColor = "#333";
        }
    }

    return (
        <div className="book-card">
            <img src={img} alt="book 1" />
            <h3 className="book-card-title">{title}</h3>
            <p className="book-card-author">Author: {author}</p>
            <p className="book-card-description">{description}</p>

            <div className="book-card-link-container">
                <a href="#home" className="book-card-link">Learn More</a>
                <a className="book-card-link add-button" onClick = {e => handleAddClick(e)}>Add +</a>
            </div>
        </div>
    )
}
