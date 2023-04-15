import React from 'react'
import BookCard from './Book-Card'
import '../styles/book-card.css'

import atomicHabits from '../images/atomicHabits.jpg'
import rdpd from '../images/rdpd.png'
import tkam from '../images/tkam.jpg'

export default function Recommendations() {
    return (
        <section id="recommendations" className="books recommendations">
            <h2 className="section-header">Recommendations</h2>
            <div className="book-cards">
                <BookCard img={atomicHabits} title="Atomic Habits" author="James Clear" description="The book offers practical strategies for developing and breaking
                            habits. It emphasizes the importance of making small changes and draws on scientific research and
                            real-life examples. The book provides a clear framework for building a successful habit system." />

                <BookCard img={rdpd} title="Rich Dad Poor Dad" author="Robert T. Kiyosaki" description="The book advocates financial independence through investing,
                            real estate, starting and owning businesses, as well as increasing one's financial intelligence.
                            It is the first book in the Rich Dad Poor Dad series." />

                <BookCard img={tkam} title="To Kill a MockingBird" author="Harper Lee" description="The novel is narrated by a young girl who witnesses racism and
                            injustice in her community as her father defends a black man falsely accused of rape. It explores
                            themes of race, prejudice, and loss of innocence." />
               
            </div>
        </section>


    )
}
