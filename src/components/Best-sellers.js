import React from 'react'
import BookCard from './Book-Card'
import '../styles/book-card.css'

import alchemist from '../images/alchemist.jpg'
import hobbit from '../images/hobbit.jpg'
import hpps from '../images/hpps.jpg'


export default function BestSellers() {
    return (
        <section id="best-sellers" className="books best-sellers">
            <h2 className="section-header">Best Sellers</h2>
            <div className="book-cards">
                <BookCard img={alchemist} title="The Alchemist" author="Paulo Coelho" description="It's about a shepherd boy named Santiago who embarks on a
                        journey to fulfill his dreams and find a hidden treasure. Along the way, he learns imp life
                        lessons about following his heart and achieve his goals." />
                <BookCard img={hpps} title="Harry Potter" author="J.K. Rowling" description="It's about an orphan boy who discovers that he is a wizard
                            and is invited to attend a school for magic where he learns the truth about his past and confronts
                            a dark force that threatens the wizarding world." />
                <BookCard img={hobbit} title="The Hobbit" author="J.R.R. Tolkien" description="It's about a hobbit who joins a group of dwarves to reclaim
                            their treasure from a dragon, facing various challenges along the way. It is a prequel to The
                            Lord of the Rings series." />
            </div>
        </section >
    )
}
