import React, { useState } from 'react'
import '../styles/navbar.css'
import logo from '../images/logo.jpg'

export default function Navbar() {
	let clicked = false;
	
	function handleHamburgerClick() {
		const navlinks = document.querySelector(".nav-links");
		const lines = document.querySelectorAll(".line");
		clicked = !clicked;
		if(clicked)
		{
			navlinks.classList.add("nav-links-active");
			lines.forEach((line) => line.classList.add("active"));
		}
		else{
			navlinks.classList.remove("nav-links-active");
			lines.forEach((line) => line.classList.remove("active"));
		}
	}


	return (
		<div className='navbar'>
			<div className="logo">
				<img src={logo} alt="Logo" />
			</div>
			<div className="nav-links">
				<a href="#home">Introduction</a>
				<a href="#best-sellers">Best Sellers</a>
				<a href="#recommendations">Recommendations</a>
				<a href="#about-us">Reviews</a>
			</div>
			<div className="hamburger" onClick={handleHamburgerClick}>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</div>
	)
}
