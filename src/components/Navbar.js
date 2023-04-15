import React from 'react'
import '../styles/navbar.css'
import logo from '../images/logo.jpg'
import { useEffect } from 'react';
// import $ from 'jquery';

export default function Navbar() {
	// document.querySelector(".hamburger").addEventListener("click", function () {
	// 	console.log("clicked");
	// 	// document.querySelector(".nav-links").scrollIntoView({
	// 	// 	behavior: 'smooth',
	// 	// 	block: 'nearest',
	// 	// 	inline: 'nearest'
	// 	// });
	// 	// $(".nav-links").slideToggle();
	// 	// $(".line").toggleClass("active");
	// });

	useEffect(() => {
		const hamburgerMenuClass = Array.from(
			document.getElementsByClassName('hamburger')
		);

		hamburgerMenuClass[0].addEventListener("click", function () {
			console.log("clicked");
			const navlinks = document.querySelector(".nav-links");
			navlinks.style.display = "flex";
			navlinks.style.flexDirection = "column";
			navlinks.style.alignItems = "center";
			navlinks.style.justifyContent = "center";
			navlinks.style.position = "absolute";
			navlinks.style.top = "0";
			navlinks.style.left = "0";
			navlinks.style.backgroundColor = "white";
			navlinks.style.zIndex = "100";
			navlinks.style.transition = "all 0.5s ease-in-out";
			// $(".nav-links").slideToggle();
			// $(".line").toggleClass("active");
		});
	});
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
			<div className="hamburger">
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</div>
	)
}
